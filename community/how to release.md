---
title: how to release
sidebar_position: 3
---

# Apache Publishing Guide
> This article takes the release of 1.0.3 Apache version as an example. If it is a non-Apache version, please refer to the [detailed information](https://incubator.apache.org/guides/releasemanagement.html) https://incubator.apache.org/guides/releasemanagement.html

Understand the content and process of Apache's release. Source Release is the focus of Apache’s attention and is also a required content for release; Binary Release is optional. Please refer to the following link to find more ASF release guidelines:
- [Apache Release Guide](http://www.apache.org/dev/release-publishing)
- [Apache Release Policy](http://www.apache.org/dev/release.html)
- [Maven Release Info](http://www.apache.org/dev/publishing-maven-artifacts.html)

Both apache's maven and SVN repositories use GPG signatures to verify the legitimacy of material files

## 1 Tool preparation
:::caution Note
Required when this publisher is publishing for the first time
:::

Mainly include the preparation of the signature tool GnuPG, Maven repository certification

### 1.1 Install GPG

**(Take the Window system as an example, if the git client has been installed, gpg may already exist, and there is no need to install it again)**

Download the binary installation package (GnuPG binary releases) at [GnuPG official website](https://www.gnupg.org/download/index.html). The latest version is [Gpg4win-3.1.16 2021-06-11](https://gpg4win.org/download.html) After downloading, please complete the installation operation first
Note: The commands of GnuPG 1.x version and 2.x version are slightly different. The following description takes 2.2.28 as an example
After installation, the gpg command is added to the system environment variables and is available
```sh
#Check the version, it should be 2.x
$ gpg --version 
```

### 1.2. Generate key with gpg

**Note the following points:**
- The mailbox used should be apache mailbox
- It is best to use pinyin or English for the name, otherwise garbled characters will appear

According to the prompt, generate the key
```shell
$ gpg --full-gen-key
gpg (GnuPG) 2.2.28; Copyright (C) 2021 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
  (14) Existing key from card
Your selection? 1 #here enter 1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (3072) 4096 #Enter 4096 here
Requested keysize is 4096 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n> = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 0 #here enter 0
Key does not expire at all
Is this correct? (y/N) y #Enter y here

GnuPG needs to construct a user ID to identify your key.

Real name: mingXiao #Enter Pinying or English name here
Email address: xiaoming@apache.org #Enter the email address of apache here
Comment: for apache release create at 20211110 #Enter some comments here, can be empty
You selected this USER-ID:
    "mingXiao (for apache release create at 20211110) <xiaoming@apache.org>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O #Enter O here
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

# At this time, a dialog box will pop up, asking you to enter the key for this gpg. you need to remember that it will be used in subsequent steps.
┌─────────────────────────────────────────────────────┐
│ Please enter this passphrase to protect your new key│
│                                                     │
│ Passphrase: _______ no less than 8 digits _________ │
│ Repeat: ___________________________________________ │
│ <OK> <Cancel>                                       │
└─────────────────────────────────────────────────────┘
#After entering the secret key, a certain random action needs to be performed to generate encrypted prime numbers. After creation, the following information will be output
gpg: key 1AE82584584EE68E marked as ultimately trusted
gpg: revocation certificate stored as'C:/Users/xxx/AppData/Roaming/gnupg/openpgp-revocs.d\E7A9B12D1AC2D8CF857AF5851AE82584584EE68E.rev'
public and secret key created and signed.

pub rsa4096 2021-11-10 [SC]
      E7A9B12D1AC2D8CF857AF5851AE82584584EE68E
uid mingXiao (for apache release create at 20211110) <xiaoming@apache.org>
sub rsa4096 2021-11-10 [E]
```

### 1.3. Upload the generated key to the public server

```shell
$ gpg --keyid-format SHORT --list-keys
pub rsa4096/584EE68E 2021-11-10 [SC] #584EE68E is the key id
      E7A9B12D1AC2D8CF857AF5851AE82584584EE68E
uid [ultimate] mingXiao (for apache release create at 20211110) <xiaoming@apache.org>
sub rsa4096/399AA54F 2021-11-10 [E]

# Send public key to keyserver via key id
$ gpg --keyserver keyserver.ubuntu.com --send-key 584EE68E
# Among them, keyserver.ubuntu.com is the selected keyserver, it is recommended to use this, because the Apache Nexus verification uses this keyserver
```
### 1.4. Check whether the key is created successfully
Verify whether it is synchronized to the public network. It takes about a minute to find out. If it is not successful, you can upload and retry several times
```shell
# method one
$ gpg --keyserver keyserver.ubuntu.com --recv-keys 584EE68E #584EE68E is the corresponding key id

#Results are as follows
gpg: key 1AE82584584EE68E: "mingXiao (for apache release create at 20211110) <xiaoming@apache.org>" not changed
gpg: Total number processed: 1
gpg: unchanged: 1

# method two
Go directly to https://keyserver.ubuntu.com/ and enter the username mingXiao to search the query results
```


### 1.5 Add the gpg public key

>  This step requires the use of SVN, please download and install the SVN client first, Apache uses svn to host the project’s published content

- Uniffle DEV branch https://dist.apache.org/repos/dist/dev/incubator/uniffle

- Uniffle Release branch https://dist.apache.org/repos/dist/release/incubator/uniffle

#### 1.5.1 Add public key to KEYS in dev branch

Used to release RC version

```shell
$ mkdir -p uniffle_svn/dev
$ cd uniffle_svn/dev

$ svn co https://dist.apache.org/repos/dist/dev/incubator/uniffle
# This step is relatively slow, and all versions will be copied. If the network is broken, use svn cleanup to delete the lock and re-execute it, and the upload will be resumed.
$ cd uniffle_svn/dev/uniffle

# Append the KEY you generated to the file KEYS, it is best to check if it is correct after appending
$ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS
# If there is a KEYS file before, it is not needed
$ svn add KEYS
#Submit to SVN
$ svn ci -m "add gpg key for YOUR_NAME"
```

#### 1.5.2 Add public key to KEYS in release branch

Used to release the official version

```shell

$ mkdir -p uniffle_svn/release
$ cd uniffle_svn/release

$ svn co https://dist.apache.org/repos/dist/release/incubator/uniffle
# This step is relatively slow, and all versions will be copied. If the network is broken, use svn cleanup to delete the lock and re-execute it, and the upload will be resumed.

$ cd uniffle
# Append the KEY you generated to the file KEYS, it is best to check if it is correct after appending
$ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS
# If there is a KEYS file before, it is not needed
$ svn add KEYS
#Submit to SVN
$ svn ci -m "add gpg key for YOUR_NAME"
```


### 2.1 Package source code

We should prepare a new branch, modify and ensure the version of pom, and add a tag
```shell
git checkout branch-1.0.3
git tag v1.0.3-rc1
git push origin v1.0.3-rc1
```

```shell
$ mkdir -p dist/apache-uniffle

#based on the release-1.0.3-rc1 branch to package the source code tar.gz material
#--prefix=apache-uniffle-1.0.3-incubating-src/ Note that the `/` archive will be in the apache-uniffle-1.0.3-incubating-src folder after decompression
#A pax_global_header file will be generated to record the commitid information. Without the --prefix, it will cause pax_global_header to be in the same level directory as the source file after decompression

$ git archive --format=tar.gz --output="dist/apache-uniffle/apache-uniffle-1.0.3-incubating-src.tar.gz" --prefix=apache-uniffle-1.0.3-incubating-src/  release-1.0.3-rc1
```
### 2.2 Copy binary files

After step 2.1 is executed, the binary file has been generated, located in uniffle-dist/target/apache-uniffle-1.0.3-incubating-bin.tar.gz
```shell
$ cp uniffle-dist/target/apache-uniffle-1.0.3-incubating-bin.tar.gz dist/apache-uniffle
```


### 2.3 Sign the source package/binary package/sha512
```shell
$ cd dist/apache-uniffle

$ for i in *.tar.gz; do echo $i; gpg --armor --output $i.asc --detach-sig $i; done # Calculate signature

$ for i in *.tar.gz; do echo $i; sha512sum  $i > $i.sha512 ; done # Calculate SHA512
```

### 2.4 Check whether the generated signature/sha512 is correct
Verify that the signature is correct as follows:
```shell
$ cd dist/apache-uniffle
$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i; done
```

If something like the following appears, the signature is correct. Keyword: **`Good signature`**
```shell
     apache-uniffle-xxx-incubating-src.tar.gz
     gpg: Signature made XXXX
     gpg: using RSA key XXXXX
     gpg: Good signature from "xxx @apache.org>"
````

Verify that sha512 is correct as follows:
```shell
$ cd dist/apache-uniffle
$ for i in *.tar.gz; do echo $i; sha512sum --check $i.sha512; done

```


## 3 Publish the Apache SVN repository

- The Uniffle [DEV branch](https://dist.apache.org/repos/dist/dev/incubator/uniffle) is used to store the source code and binary materials of the candidate version
- The RC version voted by the Uniffle [Release branch](https://dist.apache.org/repos/dist/release/incubator/uniffle) will eventually be moved to the release library

### 3.1 Check out the Uniffle release directory

Check out the Uniffle distribution directory from the Apache SVN dev directory.

```shell
$ svn co https://dist.apache.org/repos/dist/dev/incubator/uniffle dist/uniffle_svn_dev

```

### 3.2 Add the content to be published to the SVN directory

Create a version number directory and name it in the way of `${release_version}-${RC_version}`, RC_version starts from 1, that is, the candidate version starts from RC1. During the release process, there is a problem that causes the vote to be rejected, and it needs to be corrected and iterated. RC version, RC version number should be +1.
For example: 1.0.3-RC1 version is voted, if the vote is passed without any problems, the RC1 version material will be released as the final version material.
If there is a problem (when voting in the uniffle/incubator community, voters will strictly check various release requirements and compliance issues) and need to be corrected. After the correction, the vote will be re-initiated. The candidate version for the next vote is 1.0.3- RC2.

```shell
$ mkdir -p dist/uniffle_svn_dev/1.0.3-RC1
```

Add the source code package, binary package, and Uniffle executable binary package to the SVN working directory.

```shell
$ cp -f dist/apache-uniffle/* dist/uniffle_svn_dev/1.0.3-RC1

```
### 3.3 Submit Apache SVN

```shell
$ cd dist/uniffle_svn_dev/

# Check svn status
$ svn status
# Add to svn version
$ svn add 1.0.3-RC1
$ svn status
# Submit to svn remote server
$ svn commit -m "prepare for 1.0.3-RC1"

```
If Chinese garbled characters appear in the svn command, you can try to set the encoding format (set the encoding format: export LANG=en_US.UTF-8).

## 4 Verify Release Candidates
More detail checklist please refer: https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist


## 5 Initiates a vote

> Uniffle is still in the incubation stage and needs to vote twice
:::tip
Please use your apache.org mailbox to send emails, and use `plain text mode`, for details see [Appendix-Mail Switching Plain Text Format](#mail-switch-to-plain-text-format)
:::

:::caution Note

All Uniffle to checksums, signatures, and public keys must refer to the main Apache website https://downloads.apache.org/ and should use https://(SSL). For example: https://downloads.apache.org/incubator/uniffle/KEYS

The DISCLAIMER-WIP disclaimer is currently used, please add this description `As the DISCLAIMER-WIP shows....` to the email. If the WIP pending problem is solved later, it can be removed. Use of WIP, see https://issues.apache.org/jira/browse/LEGAL-469 for details
:::

- To vote in the Uniffle community, send an email to: `dev@uniffle.apache.org`
- To vote in the incubator community, send an email to: `general@incubator.apache.org` After Uniffle graduates, you only need to vote in the Uniffle community

### 5.1 Uniffle community voting stage

- To vote in the Uniffle community, send a voting email to `dev@uniffle.apache.org`. PMC needs to check the correctness of the version according to the document, and then vote. After at least 72 hours have passed and three `+1 PMC member` votes have been counted, you can enter the next stage of voting.
- Announce the results of the voting and send an email to the result of the voting to `dev@uniffle.apache.org`.

#### 5.1.1 Uniffle Community Voting Template

```html
title:
[VOTE] Release Apache Uniffle (Incubating) ${release_version} ${rc_version}

content:

Hello Uniffle Community,

    This is a call for vote to release Apache Uniffle (Incubating) version ${release_version}-${rc_version}.

    Release notes:
        https://uniffle.apache.org/download/release-notes-${release_version}
    
    The release candidates:
        https://dist.apache.org/repos/dist/dev/incubator/uniffle/${release_version}-${rc_version}/
    
    
    Git tag for the release:
        https://github.com/apache/incubator-uniffle/tree/v${release_version}-${rc_version}
    
    Keys to verify the Release Candidate:
         https://dist.apache.org/repos/dist/dev/incubator/uniffle/KEYS
    
    GPG user ID:
    ${YOUR.GPG.USER.ID}
    
    As the DISCLAIMER-WIP shows, this release still left some license problems, which will be gradually resolved during incubation.

    The vote will be open for at least 72 hours or until necessary number of votes are reached.
    
    Please vote accordingly:
    
    [] +1 approve
    [] +0 no opinion
    [] -1 disapprove with the reason
    
    Checklist for reference:
    
    [] Download links are valid.
    [] Checksums and PGP signatures are valid.
    [] Source code distributions have correct names matching the current release.
    [] LICENSE and NOTICE files are correct for each LUniffle repo.
    [] All files have license headers if necessary.
    [] No unlicensed compiled archives bundled in source archive.
    
    More detail checklist please refer:
        https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist
    
Thanks,
${Uniffle Release Manager}
```

#### 5.1.2 Announce voting result template

```html
title:
[RESULT][VOTE] Release Apache Uniffle (Incubating) ${release_version} ${rc_version}

content:
Hello Apache Uniffle PPMC and Community,

    The vote closes now as 72hr have passed. The vote PASSES with

    xx (+1 non-binding) votes from the PPMC,
    xx (+1 binding) votes from the IPMC,
    xx (+1 non-binding) votes from the rest of the developer community,
    and no further 0 or -1 votes.

    The vote thread: {vote_mail_address}

    I will now bring the vote to general@incubator.apache.org to get approval by the IPMC.
    If this vote passes also, the release is accepted and will be published.

Thank you for your support.
${Uniffle Release Manager}
```

### 5.2 Incubator community voting stage

- To vote in the Incubator community, send a voting email to `general@incubator.apache.org`, and 3 `+1 IPMC Member` votes are required to proceed to the next stage.
- Announce the result of the poll, send an email to `general@incubator.apache.org` and send a copy to `dev@uniffle.apache.org`.

#### 5.2.1 Incubator community voting template

```html
Title: [VOTE] Release Apache Uniffle(Incubating) ${release_version} ${rc_version}

content:

Hello Incubator Community,

    This is a call for a vote to release Apache Uniffle(Incubating) version
    ${release_version} ${rc_version}

    The Apache Uniffle community has voted on and approved a proposal to release
    Apache Uniffle(Incubating) version ${release_version} ${rc_version}

    We now kindly request the Incubator PMC members review and vote on this
    incubator release.

    Uniffle community vote thread:
    • [Uniffle Community Vote Link]

    Vote result thread:
    • [Link to Uniffle Community voting results]

    The release candidate:
    • https://dist.apache.org/repos/dist/dev/incubator/uniffle/${release_version}-${rc_version}/

    Git tag for the release:
    • https://github.com/apache/incubator-uniffle/releases/tag/${release_version}-${rc_version}

    Release notes:
    • https://uniffle.apache.org/download/release-notes-${release_version}

    The artifacts signed with PGP key [fill in your personal KEY], corresponding to [fill in your personal email], that can be found in keys file:
    • https://downloads.apache.org/incubator/uniffle/KEYS

    As the DISCLAIMER-WIP shows, this release still left some license problems, which will be gradually resolved during incubation.

    The vote will be open for at least 72 hours or until necessary number of votes are reached.

    Please vote accordingly:

    [] +1 approve
    [] +0 no opinion
    [] -1 disapprove with the reason

Thanks,
On behalf of Apache Uniffle (Incubating) community

```

#### 5.2.2 Announce voting result template

```html
Title: [RESULT][VOTE] Release Apache Uniffle ${release_version} {rc_version}

content:
Hi all

Thanks for reviewing and voting for Apache Uniffle(Incubating) ${release_version} {rc_version}
release, I am happy to announce the release voting has passed with [Number of voting results]
binding votes, no +0 or -1 votes. Binding votes are from IPMC

   -xxx
   -xxx
   -xxx

The voting thread is:
[Incubator community Vote Link]

Many thanks for all our mentors helping us with the release procedure, and
all IPMC helped us to review and vote for Apache Uniffle(Incubating) release. I will
be working on publishing the artifacts soon.

Thanks
On behalf of Apache Uniffle(Incubating) community
```
## 6 Official release

### 6.1 Migrating source and binary packages
:::caution note
The path name of release cannot carry the rc identifier
:::
Move source and binary packages from svn's `dev` directory to the `release` directory

```shell
#Move source package and binary package from dev to release
$ svn mv https://dist.apache.org/repos/dist/dev/incubator/uniffle/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/incubator/uniffle/ -m "transfer packages for ${release_version}-${rc_version}"
$ svn mv https://dist.apache.org/repos/dist/release/incubator/uniffle/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/incubator/uniffle/${release_version} -m "rename to ${release_version}"

# The following operations decide whether to update the key of the release branch according to the actual situation
# Clear the KEYS in the original release directory
$ svn delete https://dist.apache.org/repos/dist/release/incubator/uniffle/KEYS -m "delete KEYS"

# Copy the dev directory KEYS to the release directory
$ svn cp https://dist.apache.org/repos/dist/dev/incubator/uniffle/KEYS https://dist.apache.org/repos/dist/release/incubator/uniffle/ -m "transfer KEYS for ${release_version}-${rc_version}"
```

### 6.2 Confirm whether the packages under dev and release are correct

- Confirm that `${release_version}-${rc_version}` under [dev](https://dist.apache.org/repos/dist/dev/incubator/uniffle/) has been removed


### 6.3 Update download page

<font color='red'>Chinese and English documents should be updated</font>

The official website download address of uniffle should point to the official address of apache

After waiting and confirming that the new release version is synced to the Apache mirror (https://downloads.apache.org/incubator/uniffle/), update the following page:

- https://uniffle.apache.org/download/

### 6.4 GitHub version released

1. Tag the official version, and the RC version tag during the voting process can be removed
2. On the [GitHub Releases](https://github.com/apache/incubator-uniffle/releases) page, update the version number and version description, etc.


## 7 Email notification version is released

> Please make sure that the Apache Staging repository has been published successfully, usually mail is published 24 hours after this step

Send email to `dev@uniffle.apache.org`, `announce@apache.org` and `general@incubator.apache.org`
```html
title:
[ANNOUNCE] Apache Uniffle (Incubating) ${release_version} available

content:

Hi all,

Apache Uniffle (Incubating) Team is glad to announce the new release of Apache Uniffle (Incubating) ${release_version}.

Apache Uniffle (Incubating) builds a computation middleware layer to decouple the upper applications and the underlying data engines, provides standardized interfaces (REST, JDBC, WebSocket etc.) to easily connect to various underlying engines (Spark, Presto, Flink, etc.), while enables cross engine context sharing, unified job& engine governance and orchestration.

Download Links: https://uniffle.apache.org/download/

Release Notes: https://uniffle.apache.org/download/release-notes-${release_version}/

Website: https://uniffle.apache.org/

Uniffle Resources:
- Issue: https://github.com/apache/incubator-uniffle/issues
- Mailing list: dev@uniffle.apache.org

- Apache Uniffle (Incubating) Team

```


## Appendix
### Appendix one release.sh

```shell script
#!/bin/bash
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements. See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License. You may obtain a copy of the License at
# http://www.apache.org/licenses/LICENSE-2.0
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

# tar source code
release_version=1.0.3
#The RC version carried out this time Format RCX
rc_version=RC1
#Corresponding git repository branch
git_branch=release-1.0.3-rc1

workDir=$(cd "$(dirname "$0")"; pwd)
cd ${workDir}; echo "enter work dir:$(pwd)"

rm -rf dist

mkdir -p dist/apache-uniffle

#step1 Packaging source files
git archive --format=tar.gz --output="dist/apache-uniffle/apache-uniffle-$release_version-incubating-src.tar.gz"  --prefix=apache-uniffle-$release_version-incubating-src/   $git_branch
echo  "git archive --format=tar.gz --output='dist/apache-uniffle/apache-uniffle-$release_version-incubating-src.tar.gz' --prefix=apache-uniffle-$release_version-incubating-src/   $git_branch"

#step2 Copy the binary package
cp uniffle-dist/target/apache-uniffle-$release_version-incubating-bin.tar.gz dist/apache-uniffle

#step3 Signature

### Sign source/binary packages/sha512
cd ../dist/apache-uniffle
for i in *.tar.gz; do echo $i; gpg --armor --output $i.asc --detach-sig $i ; done # Calculate signature
for i in *.tar.gz; do echo $i; sha512sum $i > $i.sha512 ; done # Calculate SHA512

### Check if the generated signature/sha512 is correct
for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done
for i in *.tar.gz; do echo $i; sha512sum --check $i.sha512; done


#step5 Upload to svn

cd ../
rm -rf uniffle-svn-dev
svn co https://dist.apache.org/repos/dist/dev/incubator/uniffle uniffle-svn-dev


mkdir -p uniffle-svn-dev/${release_version}-${rc_version}
cp apache-uniffle/*tar.gz* uniffle-svn-dev/${release_version}-${rc_version}
cd uniffle-svn-dev

# Check svn status
svn status
# Add to svn version
svn add ${release_version}-${rc_version}
svn status
# Submit to svn remote server
svn commit -m "prepare for ${release_version} ${rc_version}"

```

### Mail switch to plain text format

Do not send plain HTML messages; instead, send plain text (content-type: text/plain). Sending HTML reduces the number of people reading your email and is often rejected by the apache.org inbound spam filter. If your message is bounced and the error message says that the spam hit includes HTML_MESSAGE, please resend the message in plain text.
For more information, please refer to the official [Email Specification](https://infra.apache.org/contrib-email-tips) https://infra.apache.org/contrib-email-tips


** Gmail mailbox switch to plain text format **

![image](https://user-images.githubusercontent.com/7869972/152912490-a5038505-e487-4451-be9a-e26021877e4f.png)

** QQ mailbox switch to plain text format **

![image](https://user-images.githubusercontent.com/11496700/149449779-d0116bb1-de9e-4cc4-98fb-af3327b15c09.png)
