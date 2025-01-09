"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,g=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"how to release",sidebar_position:3},o="Apache Publishing Guide",s={unversionedId:"how to release",id:"how to release",title:"how to release",description:"This article takes the release of 1.0.3 Apache version as an example. If it is a non-Apache version, please refer to the detailed information https://incubator.apache.org/guides/releasemanagement.html",source:"@site/community/how to release.md",sourceDirName:".",slug:"/how to release",permalink:"/zh-CN/community/how to release",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"how to release",sidebar_position:3},sidebar:"tutorialSidebar",next:{title:"how to contribute",permalink:"/zh-CN/community/how to contribute"}},l={},p=[{value:"1 Tool preparation",id:"1-tool-preparation",level:2},{value:"1.1 Install GPG",id:"11-install-gpg",level:3},{value:"1.2. Generate key with gpg",id:"12-generate-key-with-gpg",level:3},{value:"1.3. Upload the generated key to the public server",id:"13-upload-the-generated-key-to-the-public-server",level:3},{value:"1.4. Check whether the key is created successfully",id:"14-check-whether-the-key-is-created-successfully",level:3},{value:"1.5 Add the gpg public key",id:"15-add-the-gpg-public-key",level:3},{value:"1.5.1 Add public key to KEYS in dev branch",id:"151-add-public-key-to-keys-in-dev-branch",level:4},{value:"1.5.2 Add public key to KEYS in release branch",id:"152-add-public-key-to-keys-in-release-branch",level:4},{value:"2 Publish staging artifacts",id:"2-publish-staging-artifacts",level:2},{value:"2.1 Set environment variables",id:"21-set-environment-variables",level:3},{value:"2.2 Create a tag",id:"22-create-a-tag",level:3},{value:"2.3 Publish the Apache SVN repository",id:"23-publish-the-apache-svn-repository",level:3},{value:"2.4 Publishing maven artifacts",id:"24-publishing-maven-artifacts",level:3},{value:"2.4.1 Upload the artifacts",id:"241-upload-the-artifacts",level:4},{value:"2.4.2 Stage the release for a vote",id:"242-stage-the-release-for-a-vote",level:4},{value:"3 Verify Release Candidates",id:"3-verify-release-candidates",level:2},{value:"4 Initiates a vote",id:"4-initiates-a-vote",level:2},{value:"4.1 Uniffle community voting stage",id:"41-uniffle-community-voting-stage",level:3},{value:"4.1.1 Uniffle Community Voting Template",id:"411-uniffle-community-voting-template",level:4},{value:"4.1.2 Announce voting result template",id:"412-announce-voting-result-template",level:4},{value:"4.2 Incubator community voting stage",id:"42-incubator-community-voting-stage",level:3},{value:"4.2.1 Incubator community voting template",id:"421-incubator-community-voting-template",level:4},{value:"4.2.2 Announce voting result template",id:"422-announce-voting-result-template",level:4},{value:"5 Official release",id:"5-official-release",level:2},{value:"5.1 Migrating source and binary packages",id:"51-migrating-source-and-binary-packages",level:3},{value:"5.2 Confirm whether the packages under dev and release are correct",id:"52-confirm-whether-the-packages-under-dev-and-release-are-correct",level:3},{value:"5.3 Release Staging Repository in Nexus",id:"53-release-staging-repository-in-nexus",level:3},{value:"5.4 Update download page",id:"54-update-download-page",level:3},{value:"5.5 GitHub version released",id:"55-github-version-released",level:3},{value:"6 Email notification version is released",id:"6-email-notification-version-is-released",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Appendix one release.sh",id:"appendix-one-releasesh",level:3},{value:"Mail switch to plain text format",id:"mail-switch-to-plain-text-format",level:3}],c={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"apache-publishing-guide"},"Apache Publishing Guide"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article takes the release of 1.0.3 Apache version as an example. If it is a non-Apache version, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://incubator.apache.org/guides/releasemanagement.html"},"detailed information")," ",(0,i.kt)("a",{parentName:"p",href:"https://incubator.apache.org/guides/releasemanagement.html"},"https://incubator.apache.org/guides/releasemanagement.html"))),(0,i.kt)("p",null,"Understand the content and process of Apache's release. Source Release is the focus of Apache\u2019s attention and is also a required content for release; Binary Release is optional. Please refer to the following link to find more ASF release guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/release-publishing"},"Apache Release Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/release.html"},"Apache Release Policy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/publishing-maven-artifacts.html"},"Maven Release Info"))),(0,i.kt)("p",null,"Both apache's maven and SVN repositories use GPG signatures to verify the legitimacy of material files"),(0,i.kt)("h2",{id:"1-tool-preparation"},"1 Tool preparation"),(0,i.kt)("admonition",{title:"Note",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Required when this publisher is publishing for the first time")),(0,i.kt)("p",null,"Mainly include the preparation of the signature tool GnuPG, Maven repository certification"),(0,i.kt)("h3",{id:"11-install-gpg"},"1.1 Install GPG"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(Take the Window system as an example, if the git client has been installed, gpg may already exist, and there is no need to install it again)")),(0,i.kt)("p",null,"Download the binary installation package (GnuPG binary releases) at ",(0,i.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"GnuPG official website"),". The latest version is ",(0,i.kt)("a",{parentName:"p",href:"https://gpg4win.org/download.html"},"Gpg4win-3.1.16 2021-06-11")," After downloading, please complete the installation operation first\nNote: The commands of GnuPG 1.x version and 2.x version are slightly different. The following description takes 2.2.28 as an example\nAfter installation, the gpg command is added to the system environment variables and is available"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"#Check the version, it should be 2.x\n$ gpg --version \n")),(0,i.kt)("h3",{id:"12-generate-key-with-gpg"},"1.2. Generate key with gpg"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note the following points:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The mailbox used should be apache mailbox"),(0,i.kt)("li",{parentName:"ul"},"It is best to use pinyin or English for the name, otherwise garbled characters will appear")),(0,i.kt)("p",null,"According to the prompt, generate the key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --full-gen-key\ngpg (GnuPG) 2.2.28; Copyright (C) 2021 g10 Code GmbH\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n  (14) Existing key from card\nYour selection? 1 #here enter 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (3072) 4096 #Enter 4096 here\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n> = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 #here enter 0\nKey does not expire at all\nIs this correct? (y/N) y #Enter y here\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: mingXiao #Enter Pinying or English name here\nEmail address: xiaoming@apache.org #Enter the email address of apache here\nComment: for apache release create at 20211110 #Enter some comments here, can be empty\nYou selected this USER-ID:\n    \"mingXiao (for apache release create at 20211110) <xiaoming@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O #Enter O here\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\n# At this time, a dialog box will pop up, asking you to enter the key for this gpg. you need to remember that it will be used in subsequent steps.\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please enter this passphrase to protect your new key\u2502\n\u2502                                                     \u2502\n\u2502 Passphrase: _______ no less than 8 digits _________ \u2502\n\u2502 Repeat: ___________________________________________ \u2502\n\u2502 <OK> <Cancel>                                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n#After entering the secret key, a certain random action needs to be performed to generate encrypted prime numbers. After creation, the following information will be output\ngpg: key 1AE82584584EE68E marked as ultimately trusted\ngpg: revocation certificate stored as'C:/Users/xxx/AppData/Roaming/gnupg/openpgp-revocs.d\\E7A9B12D1AC2D8CF857AF5851AE82584584EE68E.rev'\npublic and secret key created and signed.\n\npub rsa4096 2021-11-10 [SC]\n      E7A9B12D1AC2D8CF857AF5851AE82584584EE68E\nuid mingXiao (for apache release create at 20211110) <xiaoming@apache.org>\nsub rsa4096 2021-11-10 [E]\n")),(0,i.kt)("h3",{id:"13-upload-the-generated-key-to-the-public-server"},"1.3. Upload the generated key to the public server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --keyid-format SHORT --list-keys\npub rsa4096/584EE68E 2021-11-10 [SC] #584EE68E is the key id\n      E7A9B12D1AC2D8CF857AF5851AE82584584EE68E\nuid [ultimate] mingXiao (for apache release create at 20211110) <xiaoming@apache.org>\nsub rsa4096/399AA54F 2021-11-10 [E]\n\n# Send public key to keyserver via key id\n$ gpg --keyserver keyserver.ubuntu.com --send-key 584EE68E\n# Among them, keyserver.ubuntu.com is the selected keyserver, it is recommended to use this, because the Apache Nexus verification uses this keyserver\n")),(0,i.kt)("h3",{id:"14-check-whether-the-key-is-created-successfully"},"1.4. Check whether the key is created successfully"),(0,i.kt)("p",null,"Verify whether it is synchronized to the public network. It takes about a minute to find out. If it is not successful, you can upload and retry several times"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# method one\n$ gpg --keyserver keyserver.ubuntu.com --recv-keys 584EE68E #584EE68E is the corresponding key id\n\n#Results are as follows\ngpg: key 1AE82584584EE68E: "mingXiao (for apache release create at 20211110) <xiaoming@apache.org>" not changed\ngpg: Total number processed: 1\ngpg: unchanged: 1\n\n# method two\nGo directly to https://keyserver.ubuntu.com/ and enter the username mingXiao to search the query results\n')),(0,i.kt)("h3",{id:"15-add-the-gpg-public-key"},"1.5 Add the gpg public key"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," This step requires the use of SVN, please download and install the SVN client first, Apache uses svn to host the project\u2019s published content")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Uniffle DEV branch ",(0,i.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/incubator/uniffle"},"https://dist.apache.org/repos/dist/dev/incubator/uniffle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Uniffle Release branch ",(0,i.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/incubator/uniffle"},"https://dist.apache.org/repos/dist/release/incubator/uniffle")))),(0,i.kt)("h4",{id:"151-add-public-key-to-keys-in-dev-branch"},"1.5.1 Add public key to KEYS in dev branch"),(0,i.kt)("p",null,"Used to release RC version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ mkdir -p uniffle_svn/dev\n$ cd uniffle_svn/dev\n\n$ svn co https://dist.apache.org/repos/dist/dev/incubator/uniffle\n# This step is relatively slow, and all versions will be copied. If the network is broken, use svn cleanup to delete the lock and re-execute it, and the upload will be resumed.\n$ cd uniffle_svn/dev/uniffle\n\n# Append the KEY you generated to the file KEYS, it is best to check if it is correct after appending\n$ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS\n# If there is a KEYS file before, it is not needed\n$ svn add KEYS\n#Submit to SVN\n$ svn ci -m "add gpg key for YOUR_NAME"\n')),(0,i.kt)("h4",{id:"152-add-public-key-to-keys-in-release-branch"},"1.5.2 Add public key to KEYS in release branch"),(0,i.kt)("p",null,"Used to release the official version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ mkdir -p uniffle_svn/release\n$ cd uniffle_svn/release\n\n$ svn co https://dist.apache.org/repos/dist/release/incubator/uniffle\n# This step is relatively slow, and all versions will be copied. If the network is broken, use svn cleanup to delete the lock and re-execute it, and the upload will be resumed.\n\n$ cd uniffle\n# Append the KEY you generated to the file KEYS, it is best to check if it is correct after appending\n$ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS\n# If there is a KEYS file before, it is not needed\n$ svn add KEYS\n#Submit to SVN\n$ svn ci -m "add gpg key for YOUR_NAME"\n')),(0,i.kt)("h2",{id:"2-publish-staging-artifacts"},"2 Publish staging artifacts"),(0,i.kt)("h3",{id:"21-set-environment-variables"},"2.1 Set environment variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export RELEASE_RC_NO=${RC NO, eg: 1, 2 ,3};\nexport ASF_USERNAME=${YOUR ASF USERNAME};\nexport ASF_PASSWORD=${YOUR ASF PASSWORD};\nexport RELEASE_VERSION=${release version, eg:0.8.0}\n")),(0,i.kt)("h3",{id:"22-create-a-tag"},"2.2 Create a tag"),(0,i.kt)("p",null,"We should prepare a new branch, modify and ensure the version of pom, and add a tag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout branch-${RELEASE_VERSION}\ngit tag v${RELEASE_VERSION}-rc${RELEASE_RC_NO}\ngit push origin v${RELEASE_VERSION}-rc${RELEASE_RC_NO}\n")),(0,i.kt)("h3",{id:"23-publish-the-apache-svn-repository"},"2.3 Publish the Apache SVN repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./release/publish_to_svn.sh\n")),(0,i.kt)("h3",{id:"24-publishing-maven-artifacts"},"2.4 Publishing maven artifacts"),(0,i.kt)("h4",{id:"241-upload-the-artifacts"},"2.4.1 Upload the artifacts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$  ./release/publish_maven_artifacts.sh\n")),(0,i.kt)("h4",{id:"242-stage-the-release-for-a-vote"},"2.4.2 Stage the release for a vote"),(0,i.kt)("p",null,"Now you must close the staging repository(",(0,i.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories"),") to indicate to Nexus that the build is done and to make the artifacts available. Follow the steps in Closing the Staged Repository, later in this document. This will allow your community to vote on the staged artifacts.\nRefer: ",(0,i.kt)("a",{parentName:"p",href:"https://central.sonatype.org/publish/release/#locate-and-examine-your-staging-repository"},"https://central.sonatype.org/publish/release/#locate-and-examine-your-staging-repository")),(0,i.kt)("h2",{id:"3-verify-release-candidates"},"3 Verify Release Candidates"),(0,i.kt)("p",null,"More detail checklist please refer: ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist")),(0,i.kt)("h2",{id:"4-initiates-a-vote"},"4 Initiates a vote"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Uniffle is still in the incubation stage and needs to vote twice")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Please use your apache.org mailbox to send emails, and use ",(0,i.kt)("inlineCode",{parentName:"p"},"plain text mode"),", for details see ",(0,i.kt)("a",{parentName:"p",href:"#mail-switch-to-plain-text-format"},"Appendix-Mail Switching Plain Text Format"))),(0,i.kt)("admonition",{title:"Note",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"All Uniffle to checksums, signatures, and public keys must refer to the main Apache website ",(0,i.kt)("a",{parentName:"p",href:"https://downloads.apache.org/"},"https://downloads.apache.org/")," and should use https://(SSL). For example: ",(0,i.kt)("a",{parentName:"p",href:"https://downloads.apache.org/incubator/uniffle/KEYS"},"https://downloads.apache.org/incubator/uniffle/KEYS"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To vote in the Uniffle community, send an email to: ",(0,i.kt)("inlineCode",{parentName:"li"},"dev@uniffle.apache.org")),(0,i.kt)("li",{parentName:"ul"},"To vote in the incubator community, send an email to: ",(0,i.kt)("inlineCode",{parentName:"li"},"general@incubator.apache.org")," After Uniffle graduates, you only need to vote in the Uniffle community")),(0,i.kt)("h3",{id:"41-uniffle-community-voting-stage"},"4.1 Uniffle community voting stage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To vote in the Uniffle community, send a voting email to ",(0,i.kt)("inlineCode",{parentName:"li"},"dev@uniffle.apache.org"),". PMC members need to check the correctness of the version according to the document, and then vote. After at least 72 hours have passed and three ",(0,i.kt)("inlineCode",{parentName:"li"},"+1 PMC member")," votes have been counted, you can enter the next stage of voting."),(0,i.kt)("li",{parentName:"ul"},"Announce the results of the voting and send an email to the result of the voting to ",(0,i.kt)("inlineCode",{parentName:"li"},"dev@uniffle.apache.org"),".")),(0,i.kt)("h4",{id:"411-uniffle-community-voting-template"},"4.1.1 Uniffle Community Voting Template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"title:\n[VOTE] Release Apache Uniffle (Incubating) ${release_version} ${rc_version}\n\ncontent:\n\nHello Uniffle Community,\n\n    This is a call for vote to release Apache Uniffle (Incubating) version ${release_version}-${rc_version}.\n\n    Release notes:\n        https://uniffle.apache.org/download/release-notes-${release_version}\n    \n    The release candidates:\n        https://dist.apache.org/repos/dist/dev/incubator/uniffle/${release_version}-${rc_version}/\n    \n    The Staging Repository:\n        https://repository.apache.org/content/repositories/orgapacheuniffle-${staging_id}/\n    \n    Git tag for the release:\n        https://github.com/apache/incubator-uniffle/tree/v${release_version}-${rc_version}\n    \n    Keys to verify the Release Candidate:\n        https://dist.apache.org/repos/dist/dev/incubator/uniffle/KEYS\n    \n    GPG user ID:\n    ${YOUR.GPG.USER.ID}\n\n    The vote will be open for at least 72 hours or until necessary number of votes are reached.\n    \n    Please vote accordingly:\n    \n    [] +1 approve\n    [] +0 no opinion\n    [] -1 disapprove with the reason\n    \n    Checklist for reference:\n    \n    [] Download links are valid.\n    [] Checksums and PGP signatures are valid.\n    [] Source code distributions have correct names matching the current release.\n    [] LICENSE and NOTICE files are correct for each Uniffle repo.\n    [] All files have license headers if necessary.\n    [] No unlicensed compiled archives bundled in source archive.\n    \n    More detail checklist please refer:\n        https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist\n    \nThanks,\n${Uniffle Release Manager}\n")),(0,i.kt)("h4",{id:"412-announce-voting-result-template"},"4.1.2 Announce voting result template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"title:\n[RESULT][VOTE] Release Apache Uniffle (Incubating) ${release_version} ${rc_version}\n\ncontent:\nHello Apache Uniffle PPMC and Community,\n\n    The vote closes now as 72hr have passed. The vote PASSES with\n\n    xx (+1 binding) votes from the PPMC,\n    xx (+1 non-binding) votes from the rest of the developer community,\n    and no further 0 or -1 votes.\n\n    The vote thread: {vote_mail_address}\n\n    I will now bring the vote to general@incubator.apache.org to get approval by the IPMC.\n    If this vote passes also, the release is accepted and will be published.\n\nThank you for your support.\n${Uniffle Release Manager}\n")),(0,i.kt)("h3",{id:"42-incubator-community-voting-stage"},"4.2 Incubator community voting stage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To vote in the Incubator community, send a voting email to ",(0,i.kt)("inlineCode",{parentName:"li"},"general@incubator.apache.org"),", and 3 ",(0,i.kt)("inlineCode",{parentName:"li"},"+1 IPMC Member")," votes are required to proceed to the next stage."),(0,i.kt)("li",{parentName:"ul"},"Announce the result of the poll, send an email to ",(0,i.kt)("inlineCode",{parentName:"li"},"general@incubator.apache.org")," and send a copy to ",(0,i.kt)("inlineCode",{parentName:"li"},"dev@uniffle.apache.org"),".")),(0,i.kt)("h4",{id:"421-incubator-community-voting-template"},"4.2.1 Incubator community voting template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"Title: [VOTE] Release Apache Uniffle (Incubating) ${release_version} ${rc_version}\n\ncontent:\n\nHello Incubator Community,\n\n    This is a call for a vote to release Apache Uniffle (Incubating) version\n    ${release_version} ${rc_version}\n\n    The Apache Uniffle community has voted on and approved a proposal to release\n    Apache Uniffle (Incubating) version ${release_version} ${rc_version}\n\n    We now kindly request the Incubator PMC members review and vote on this\n    incubator release.\n\n    Uniffle community vote thread:\n    \u2022 [Uniffle Community Vote Link]\n\n    Vote result thread:\n    \u2022 [Link to Uniffle Community voting results]\n\n    The release candidate:\n    \u2022 https://dist.apache.org/repos/dist/dev/incubator/uniffle/${release_version}-${rc_version}/\n\n    Git tag for the release:\n    \u2022 https://github.com/apache/incubator-uniffle/releases/tag/${release_version}-${rc_version}\n\n    Release notes:\n    \u2022 https://uniffle.apache.org/download/release-notes-${release_version}\n\n    The artifacts signed with PGP key [fill in your personal KEY], corresponding to [fill in your personal email], that can be found in keys file:\n    \u2022 https://downloads.apache.org/incubator/uniffle/KEYS\n\n    The vote will be open for at least 72 hours or until necessary number of votes are reached.\n\n    Please vote accordingly:\n\n    [] +1 approve\n    [] +0 no opinion\n    [] -1 disapprove with the reason\n\nThanks,\nOn behalf of Apache Uniffle (Incubating) community\n\n")),(0,i.kt)("h4",{id:"422-announce-voting-result-template"},"4.2.2 Announce voting result template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"Title: [RESULT][VOTE] Release Apache Uniffle ${release_version} {rc_version}\n\ncontent:\nHi all\n\nThanks for reviewing and voting for Apache Uniffle (Incubating) ${release_version} {rc_version}\nrelease, I am happy to announce the release voting has passed with [Number of voting results]\nbinding votes, no +0 or -1 votes. Binding votes are from IPMC members\n\n   - xxx\n   - yyy\n   - zzz\n\nThe voting thread is:\n[Incubator community Vote Link]\n\nMany thanks for all our mentors helping us with the release procedure, and all IPMC members\nhelping us to review and vote for Apache Uniffle (Incubating) release. I will\nbe working on publishing the artifacts soon.\n\nThanks\nOn behalf of Apache Uniffle (Incubating) community\n")),(0,i.kt)("h2",{id:"5-official-release"},"5 Official release"),(0,i.kt)("h3",{id:"51-migrating-source-and-binary-packages"},"5.1 Migrating source and binary packages"),(0,i.kt)("admonition",{title:"note",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The path name of release cannot carry the rc identifier")),(0,i.kt)("p",null,"Move source and binary packages from svn's ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," directory to the ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#Move source package and binary package from dev to release\n$ svn mv https://dist.apache.org/repos/dist/dev/incubator/uniffle/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/incubator/uniffle/ -m "transfer packages for ${release_version}-${rc_version}"\n$ svn mv https://dist.apache.org/repos/dist/release/incubator/uniffle/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/incubator/uniffle/${release_version} -m "rename to ${release_version}"\n\n# The following operations decide whether to update the key of the release branch according to the actual situation\n# Clear the KEYS in the original release directory\n$ svn delete https://dist.apache.org/repos/dist/release/incubator/uniffle/KEYS -m "delete KEYS"\n\n# Copy the dev directory KEYS to the release directory\n$ svn cp https://dist.apache.org/repos/dist/dev/incubator/uniffle/KEYS https://dist.apache.org/repos/dist/release/incubator/uniffle/ -m "transfer KEYS for ${release_version}-${rc_version}"\n')),(0,i.kt)("h3",{id:"52-confirm-whether-the-packages-under-dev-and-release-are-correct"},"5.2 Confirm whether the packages under dev and release are correct"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Confirm that ",(0,i.kt)("inlineCode",{parentName:"li"},"${release_version}-${rc_version}")," under ",(0,i.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/incubator/uniffle/"},"dev")," has been removed")),(0,i.kt)("h3",{id:"53-release-staging-repository-in-nexus"},"5.3 Release Staging Repository in Nexus"),(0,i.kt)("p",null,"Release the staging repository by pressing the Release button. Refer: ",(0,i.kt)("a",{parentName:"p",href:"https://central.sonatype.org/publish/release/#close-and-drop-or-release-your-staging-repository"},"https://central.sonatype.org/publish/release/#close-and-drop-or-release-your-staging-repository")),(0,i.kt)("h3",{id:"54-update-download-page"},"5.4 Update download page"),(0,i.kt)("font",{color:"red"},"Chinese and English documents should be updated"),(0,i.kt)("p",null,"The official website download address of uniffle should point to the official address of apache"),(0,i.kt)("p",null,"After waiting and confirming that the new release version is synced to the Apache mirror (",(0,i.kt)("a",{parentName:"p",href:"https://downloads.apache.org/incubator/uniffle/"},"https://downloads.apache.org/incubator/uniffle/"),"), update the following page:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://uniffle.apache.org/download/"},"https://uniffle.apache.org/download/"))),(0,i.kt)("h3",{id:"55-github-version-released"},"5.5 GitHub version released"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Tag the official version, and the RC version tag during the voting process can be removed"),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/releases"},"GitHub Releases")," page, update the version number and version description, etc.")),(0,i.kt)("h2",{id:"6-email-notification-version-is-released"},"6 Email notification version is released"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please make sure that the Apache Staging repository has been published successfully, usually mail is published 24 hours after this step")),(0,i.kt)("p",null,"Send email to ",(0,i.kt)("inlineCode",{parentName:"p"},"dev@uniffle.apache.org"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"announce@apache.org")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"general@incubator.apache.org")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"title:\n[ANNOUNCE] Apache Uniffle (Incubating) ${release_version} available\n\ncontent:\n\nHi all,\n\nApache Uniffle (Incubating) Team is glad to announce the new release of Apache Uniffle (Incubating) ${release_version}.\n\nApache Uniffle (Incubating) is designed as a unified shuffle engine for multiple computing frameworks, including Apache Spark and Apache Hadoop. Uniffle has provided pluggable client plugins to enable remote shuffle in Spark, Flink, MapReduce and TEZ.\n\nDownload Links: https://uniffle.apache.org/download/\n\nRelease Notes: https://uniffle.apache.org/download/release-notes-${release_version}/\n\nWebsite: https://uniffle.apache.org/\n\nUniffle Resources:\n- Issue: https://github.com/apache/incubator-uniffle/issues\n- Mailing list: dev@uniffle.apache.org\n\nApache Uniffle (Incubating) Team\n")),(0,i.kt)("h2",{id:"appendix"},"Appendix"),(0,i.kt)("h3",{id:"appendix-one-releasesh"},"Appendix one release.sh"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'#!/bin/bash\n#\n# Licensed to the Apache Software Foundation (ASF) under one or more\n# contributor license agreements. See the NOTICE file distributed with\n# this work for additional information regarding copyright ownership.\n# The ASF licenses this file to You under the Apache License, Version 2.0\n# (the "License"); you may not use this file except in compliance with\n# the License. You may obtain a copy of the License at\n# http://www.apache.org/licenses/LICENSE-2.0\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n#\n\n# tar source code\nrelease_version=1.0.3\n#The RC version carried out this time Format RCX\nrc_version=RC1\n#Corresponding git repository branch\ngit_branch=release-1.0.3-rc1\n\nworkDir=$(cd "$(dirname "$0")"; pwd)\ncd ${workDir}; echo "enter work dir:$(pwd)"\n\nrm -rf dist\n\nmkdir -p dist/apache-uniffle\n\n#step1 Packaging source files\ngit archive --format=tar.gz --output="dist/apache-uniffle/apache-uniffle-$release_version-incubating-src.tar.gz"  --prefix=apache-uniffle-$release_version-incubating-src/   $git_branch\necho  "git archive --format=tar.gz --output=\'dist/apache-uniffle/apache-uniffle-$release_version-incubating-src.tar.gz\' --prefix=apache-uniffle-$release_version-incubating-src/   $git_branch"\n\n#step2 Copy the binary package\ncp uniffle-dist/target/apache-uniffle-$release_version-incubating-bin.tar.gz dist/apache-uniffle\n\n#step3 Signature\n\n### Sign source/binary packages/sha512\ncd ../dist/apache-uniffle\nfor i in *.tar.gz; do echo $i; gpg --armor --output $i.asc --detach-sig $i ; done # Calculate signature\nfor i in *.tar.gz; do echo $i; sha512sum $i > $i.sha512 ; done # Calculate SHA512\n\n### Check if the generated signature/sha512 is correct\nfor i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\nfor i in *.tar.gz; do echo $i; sha512sum --check $i.sha512; done\n\n\n#step5 Upload to svn\n\ncd ../\nrm -rf uniffle-svn-dev\nsvn co https://dist.apache.org/repos/dist/dev/incubator/uniffle uniffle-svn-dev\n\n\nmkdir -p uniffle-svn-dev/${release_version}-${rc_version}\ncp apache-uniffle/*tar.gz* uniffle-svn-dev/${release_version}-${rc_version}\ncd uniffle-svn-dev\n\n# Check svn status\nsvn status\n# Add to svn version\nsvn add ${release_version}-${rc_version}\nsvn status\n# Submit to svn remote server\nsvn commit -m "prepare for ${release_version} ${rc_version}"\n\n')),(0,i.kt)("h3",{id:"mail-switch-to-plain-text-format"},"Mail switch to plain text format"),(0,i.kt)("p",null,"Do not send plain HTML messages; instead, send plain text (content-type: text/plain). Sending HTML reduces the number of people reading your email and is often rejected by the apache.org inbound spam filter. If your message is bounced and the error message says that the spam hit includes HTML_MESSAGE, please resend the message in plain text.\nFor more information, please refer to the official ",(0,i.kt)("a",{parentName:"p",href:"https://infra.apache.org/contrib-email-tips"},"Email Specification")," ",(0,i.kt)("a",{parentName:"p",href:"https://infra.apache.org/contrib-email-tips"},"https://infra.apache.org/contrib-email-tips")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Gmail mailbox switch to plain text format ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7869972/152912490-a5038505-e487-4451-be9a-e26021877e4f.png",alt:"image"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," QQ mailbox switch to plain text format ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11496700/149449779-d0116bb1-de9e-4cc4-98fb-af3327b15c09.png",alt:"image"})))}u.isMDXComponent=!0}}]);