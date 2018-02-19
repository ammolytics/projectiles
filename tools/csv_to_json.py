#!/usr/bin/env python
# -*- coding: utf-8 -*-
import argparse
import codecs
import csv
import json


parser = argparse.ArgumentParser(description='Convert a CSV file to JSON format.')
parser.add_argument('filename', help='a csv filename to be JSONified')


def utf_8_encoder(unicode_csv_data):
  for line in unicode_csv_data:
    yield line.encode('utf-8')


def main(filename):
  with codecs.open(filename, 'r', encoding='utf-8') as fp:
    reader = csv.DictReader(utf_8_encoder(fp))
    output = [x for x in reader]
    print json.dumps(output, indent=4, ensure_ascii=False, sort_keys=True)


if __name__ == '__main__':
  args = parser.parse_args()
  main(args.filename)
