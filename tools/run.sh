#!/bin/bash
#
# Usage:
#   ./run.sh <function name>

set -o nounset
set -o pipefail
set -o errexit


log() {
  echo "$@" >&2
}


csv-to-json() {
  for input in data/*.csv; do
    output="${input%.csv}.json"
    log "./csv_to_json.py $input > $output"
    ./tools/csv_to_json.py $input > $output
  done
}

"$@"
