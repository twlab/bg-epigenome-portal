import os
import sys
import json
import copy
import time
import gzip
import argparse
import requests
from bs4 import BeautifulSoup



region_distributions = {}
neighborhoods = set([])
classes = set([])
subclasses = set([])
groups = set([])


with open("./taxonomy.tsv") as f:
    for l in f:
        n, c, s, g, rd = l.strip().split("\t")
        neighborhoods.add(n)
        classes.add(c)
        subclasses.add(s)
        groups.add(g)

        region_distributions[g] = eval(rd)

# print(region_distributions)








# https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/eckerlab/


urls = [
    "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/allen/Group.tracks/",
    "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/allen/Subclass.tracks/",
    "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/mouse/renlab/Mous_MSN_Histone_bw/",
    "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/mouse/renlab/Mouse_MSN_RNA_bw_file/",
    "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/renlab/Group/BGC_paired-Tag_Group_level_DNA_500bp_bw_file/",
    "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/renlab/Group/BGC_paired-Tag_Group_level_RNA_500bp_bw_file/",
    "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/renlab/Subclass/BGC_paired-tag_DNA_bw_file/",
    "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/renlab/Subclass/BGC_paired-Tag_DNA_500bp_bw_file/",
    "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/renlab/Subclass/BGC_paired-tag_RNA_bw_file/",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]


allowed_file_types = ['bedgraph', 'bw', 'bedpe', 'hic', 'methylc', 'bigbed', 'bed6', 'lrtk']
histone_assays = [
    "H3K9me3",
    "H3K27ac",
    "H3K27me3"]

def file_name_from_url(furl):
    return furl.split("/")[-1]

def file_type_from_url(furl):
    tmp = furl.lower().split("/")[-1].split(".")
    ft = tmp[-1]
    if ft == "gz" and len(tmp) >= 3:
        ft = tmp[-2]
    return ft

def file_type_to_track_type(ft):
    mapping = {
        "bg": "bedgraph",
        "bw": "bigwig",
        "bb": "bigbed",
        "bedpe": "longrange",
        "lrtk": "longrange",
        "bed6": "bed",
    }
    if ft in mapping:
        return mapping[ft]
    return ft



def ftp_url_to_list(ftp_url, file_types=[]):
    res = []
    file_types = set(file_types)

    r = requests.get(ftp_url)
    soup = BeautifulSoup(r.text, 'html.parser')
    for link in soup.find_all('a'):
        href = link.get('href')
        file_url = ftp_url + href

        if href.endswith("/"):
            # skip directories
            continue

        ft = file_type_from_url(href)
        if len(file_types) > 0:
            if ft not in file_types:
                continue

        res.append(file_url)

    return res


def guess_group_from_url(furl):
    result = []
    fn = file_name_from_url(furl).lower()
    for g in groups:
        gori = g
        g = g.lower()
        found = False
        if g in fn:
            found = True
        if g.replace(" ", "_") in fn:
            found = True

        if found:
            result.append(gori)

    if ".bam_rmdup.bw" in fn or ".bam.bw" in fn or ".bam_rmdup.bw" in fn:
        if not fn.startswith("bam"):
            result.remove("BAM")

    return result



def guess_subclass_from_url(furl):
    result = []
    fn = file_name_from_url(furl).lower()
    for g in subclasses:
        gori = g
        g = g.lower()
        found = False
        if g in fn:
            found = True
        if g.replace(" ", "_") in fn:
            found = True

        if found:
            result.append(gori)
    return result


def guess_histone_assay_from_url(furl):
    result = []
    fn = file_name_from_url(furl).lower()
    for ha in histone_assays:
        haori = ha
        ha = ha.lower()
        found = False
        if ha in fn:
            found = True

        if found:
            result.append(haori)
    return result



tmp = []
for url in urls:
    if url == "":
        continue
    for furl in ftp_url_to_list(url):
        ft = file_type_from_url(furl)
        tmp.append(ft)

print(list(sorted(set(tmp))))







with open("./tracks.tsv", "w") as f:


    files = ftp_url_to_list("https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/allen/Group.tracks/", file_types=allowed_file_types)
    for furl in files:

        ft = file_type_from_url(furl)
        track_type = file_type_to_track_type(ft)

        if ft == "bedgraph":
            continue

        gg = guess_group_from_url(furl)
        if len(gg) != 1:
            print("Could not uniquely guess group for file:", furl)
            continue
        gg = gg[0]

        meta_data = {
            "source": "Allen Institute",
            "assay": "10X multiome",
            "description": "10X multiome ATAC-seq",
            "reference": "hg38",
            "group": gg,
        }

        # "metadata": {"genome": "HG00097_1"},
        track_display_data = {
            "name": f"{gg} ATAC-seq",
            "type": track_type,
            "url": furl,
            # "options": {"height": 50}
        }

        line = f"{json.dumps(meta_data)}\t{json.dumps(track_display_data)}\n"
        f.write(line)



    files = ftp_url_to_list("https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/allen/Subclass.tracks/", file_types=allowed_file_types)
    for furl in files:

        ft = file_type_from_url(furl)
        track_type = file_type_to_track_type(ft)

        if ft == "bedgraph":
            continue

        gsc = guess_subclass_from_url(furl)
        if len(gsc) != 1:
            print("Could not uniquely guess group for file:", furl, gsc)
            continue
        gsc = gsc[0]

        meta_data = {
            "source": "Allen Institute",
            "assay": "10X multiome",
            "description": "10X multiome ATAC-seq",
            "reference": "hg38",
            "subclass": gsc,
        }

        # "metadata": {"genome": "HG00097_1"},
        track_display_data = {
            "name": f"{gsc} ATAC-seq",
            "type": track_type,
            "url": furl,
            # "options": {"height": 50}
        }

        line = f"{json.dumps(meta_data)}\t{json.dumps(track_display_data)}\n"
        f.write(line)








    for xna in ["DNA", "RNA"]:
        files = ftp_url_to_list(f"https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/renlab/Group/BGC_paired-Tag_Group_level_{xna}_500bp_bw_file/", file_types=allowed_file_types)
        for furl in files:

            ft = file_type_from_url(furl)
            track_type = file_type_to_track_type(ft)

            gg = guess_group_from_url(furl)
            if len(gg) != 1:
                print("Could not uniquely guess group for file:", furl, gg)
                continue
            gg = gg[0]

            histone = guess_histone_assay_from_url(furl)
            if xna == "DNA" and len(histone) != 1:
                print("Could not uniquely guess assay for file:", furl, assay)
                continue

            assay = "Paired Tag"
            description = "Paired Tag, RNA expression"
            if xna == "DNA":
                assay = "Paired Tag"
                description = f"Paired Tag, {histone[0]} histone modification"



            meta_data = {
                "source": "Ren Lab",
                "assay": assay,
                "description": description,
                "reference": "hg38",
                "group": gg,
            }

            # "metadata": {"genome": "HG00097_1"},
            trackname = f"{gg} {assay}"
            if xna == "DNA":
                trackname += f" {histone[0]}"
            else:
                trackname += " RNA"
            track_display_data = {
                "name": trackname,
                "type": track_type,
                "url": furl,
                # "options": {"height": 50}
            }

            line = f"{json.dumps(meta_data)}\t{json.dumps(track_display_data)}\n"
            f.write(line)


        files = ftp_url_to_list(f"https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/renlab/Subclass/BGC_paired-tag_{xna}_bw_file/", file_types=allowed_file_types)
        for furl in files:

            ft = file_type_from_url(furl)
            track_type = file_type_to_track_type(ft)

            gsc = guess_subclass_from_url(furl)
            if len(gsc) != 1:
                print("Could not uniquely guess subclass for file:", furl)
                continue
            gsc = gsc[0]

            histone = guess_histone_assay_from_url(furl)
            if xna == "DNA" and len(histone) != 1:
                print("Could not uniquely guess assay for file:", furl, assay)
                continue

            assay = "Paired Tag"
            description = "Paired Tag, RNA expression"
            if xna == "DNA":
                assay = "Paired Tag"
                description = f"Paired Tag, {histone[0]} histone modification"

            meta_data = {
                "source": "Ren Lab",
                "assay": assay,
                "description": description,
                "reference": "hg38",
                "subclass": gsc,
            }

            # "metadata": {"genome": "HG00097_1"},
            trackname = f"{gsc} {assay}"
            if xna == "DNA":
                trackname += f" {histone[0]}"
            else:
                trackname += " RNA"
            track_display_data = {
                "name": trackname,
                "type": track_type,
                "url": furl,
                # "options": {"height": 50}
            }

            line = f"{json.dumps(meta_data)}\t{json.dumps(track_display_data)}\n"
            f.write(line)



    for classification in ["Group", "Subclass"]:

        # skip methylation.bigwig
        folder_des = {
            "ABC.links": ["snm3C-seq", "Activity by contacts from snm3C-seq"],
            # "atac": ["snm3C-seq", "Chromatin accessibility from snm3C-seq"],
            "domain": ["snm3C-seq", "The topologically associating domains from snm3C-seq"],
            "hic": ["snm3C-seq", "Chromatin interactions from snm3C-seq"],
            "hypo-DMR": ["snm3C-seq", "Differentially methylated regions from snm3C-seq"],
            "loop.bedpe": ["snm3C-seq", "The loop call from snm3C-seq"],
            # "methylation.bigwig": ["snm3C-seq", ""],
            "methylc": ["snm3C-seq", "Methylation from snm3C-seq"],
        }


        for folder, (assay, description) in folder_des.items():

            url = f"https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/eckerlab/{classification}/{folder}/"
            files = ftp_url_to_list(url, file_types=allowed_file_types)
            for furl in files:

                ft = file_type_from_url(furl)
                track_type = file_type_to_track_type(ft)
                if furl.endswith("bedpe"):
                    # bedped needs to be gzipped and indexed
                    continue

                guessed_classification = None
                if classification == "Group":
                    gg = guess_group_from_url(furl)
                    if len(gg) != 1:
                        print("Could not uniquely guess group for file:", furl, gg)
                        continue
                    guessed_classification = gg[0]
                else:
                    gsc = guess_subclass_from_url(furl)
                    if len(gsc) != 1:
                        print("Could not uniquely guess subclass for file:", furl)
                        continue
                    guessed_classification = gsc[0]


                meta_data = {
                    "source": "Ecker Lab",
                    "assay": assay,
                    "description": description,
                    "reference": "hg38",
                    classification.lower(): guessed_classification,
                }

                # "metadata": {"genome": "HG00097_1"},
                track_display_data = {
                    "name": f"{guessed_classification} {description}",
                    "type": track_type,
                    "url": furl,
                    # "options": {"height": 50}
                }

                if folder in ["loop.bedpe", "ABC.links"]:
                    track_display_data["options"] = {"displayMode": "ARC"}

                line = f"{json.dumps(meta_data)}\t{json.dumps(track_display_data)}\n"
                f.write(line)




    files_urls = {
        "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/mouse/renlab/Mous_MSN_Histone_bw/":   ["mm10", "Paired Tag", "Ren Lab", "Paired Tag histone"],
        "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/mouse/renlab/Mouse_MSN_RNA_bw_file/": ["mm10", "Paired Tag", "Ren Lab", "Paired Tag RNA expression"],
        "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/marmoset/ATAC/": ["mCalJa1.2", "10X multiome", "Allen Institute", "10X multiome ATAC-seq"],
        "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/macaque/ATAC/":   ["rheMac10", "10X multiome", "Allen Institute", "10X multiome ATAC-seq"],
    }


    for url, (reference, assay, source, description) in files_urls.items():
        files = ftp_url_to_list(url, file_types=allowed_file_types)
        for furl in files:

            ft = file_type_from_url(furl)
            track_type = file_type_to_track_type(ft)

            gg = guess_group_from_url(furl)
            if len(gg) != 1:
                print("Could not uniquely guess group for file:", furl)
                continue
            gg = gg[0]

            track_name = f"{gg} {assay}"
            if url == "https://epigenome.wustl.edu/basal-ganglia-epigenome/tracks/mouse/renlab/Mous_MSN_Histone_bw/":
                histone = guess_histone_assay_from_url(furl)
                if len(histone) != 1:
                    print("Could not uniquely guess assay for file:", furl, assay)
                    continue
                track_name += f" {histone[0]}"
            track_name += f" ({reference})"

            meta_data = {
                "source": source,
                "assay": assay,
                "description": description,
                "reference": reference,
                "group": gg,
            }


            track_display_data = {
                "name": track_name,
                "type": track_type,
                "url": furl,
                "metadata": {"genome": reference}
                # "options": {"height": 50}
            }

            line = f"{json.dumps(meta_data)}\t{json.dumps(track_display_data)}\n"
            f.write(line)


lines = []
with open("./tracks.tsv") as f:
    for l in f:
        lines.append(l)

with open("./tracks.tsv", "w") as f:
    for l in lines:
        lx = l.strip().split("\t")
        for i in range(len(lx)):
            lx[i] = json.loads(lx[i])

        if "options" not in lx[1]:
            lx[1]["options"] = {}

        # lx[1]["options"]["label"] = lx[1]["name"]
        for i in range(len(lx)):
            lx[i] = json.dumps(lx[i])
        line = "\t".join(lx) + "\n"
        f.write(line)


if __name__ == '__main__':
    pass
