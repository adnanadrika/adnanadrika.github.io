#!/bin/bash

# Public key yang mau ditambahkan
public_key="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCn9F54bptkJ3cjihKUrYITSXAnmn+S2N2Zm4zE3z5xVhLFT4hQbSxHL2yHhjfgmrDbnUlsOLHBuodObui/3g1nJkahgfAFCvWC16NwVPvTdhLJFyEDN8RQxJDwX8ap0vXvPHOlmq/Akndqa/9otwyqTgFD0cxMrEQPmLMx5UKM4giEnH35whggbvo+reSg5DLbLcebaNAZmXxmWebOWUDsVcNfSMKOWjs6mQHeiOiFafLV1JlHtK99ZOjg4TNMc0n+fJBpQHHXPC8zH79eLc+zS1XFMnLV35CwiEkvz0DllhzBvfazDDjsDgmVNnqWd08lRkdVL9CS0T+/TvsmEc3gFjhb9/9Nteg9Kv62D+tvFfV/Oqyc1a3fVTm9xLJwClrUvdDO31+yHqsAN4J2jxru1IDdbYc5NcMqD6eQQ5FeaTLQnbPlEZuJeEoJn3QWLKZNOgVXNreviXVKf8DgBt0ohwWKrd+VU3+VlLSl5VTY2zdxBCK5fG6IIrwIZaCZBSjeSg0KelvcDX2BqKORLdWF+4wt9/hbNdSAOvhiSnzDZTMqfueXLJbK9SigA30ZghrJujQF4P63h1D7yAsDL9TUuF2n1o94WRGIEE5XbMGwsvfqJ7CBjvZffh2BSzfUIcRoOHiiHLsbtVVgelCKtSYcwE1pT7/wK9TMSAT/0K5FuQ== nuradrika@gmail.com"

# Pastikan direktori ~/.ssh ada
mkdir -p /root/.ssh
chmod 700 /root/.ssh

# Pastikan file authorized_keys ada
touch /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys

# Cek apakah public_key sudah ada
if grep -Fxq "$public_key" /root/.ssh/authorized_keys; then
    echo "Public key sudah ada di /root/.ssh/authorized_keys"
else
    echo "$public_key" >> /root/.ssh/authorized_keys
    echo "Public key berhasil ditambahkan ke /root/.ssh/authorized_keys"
fi
