# Installation

This section shows us how to install operator in our cluster.

## Requirements

1. Kubernetes 1.14+
2. Kubectl 1.14+

Please make sure the kubectl is properly configured to interact with the Kubernetes environment.

## Preparing Images of Coordinators and Shuffle Servers

Run the following command:

```
cd /deploy/kubernetes/docker && sh build.sh --registry ${our-registry}
```

## Creating or Updating CRD

We can refer
to [crd yaml file](https://github.com/apache/incubator-uniffle/tree/master/deploy/kubernetes/operator/config/crd/bases/uniffle.apache.org_remoteshuffleservices.yaml).

Run the following command:

```
kubectl apply -f ${crd-yaml-file}
```

## Setup or Update Uniffle Webhook

We can refer to [webhook yaml file](https://github.com/apache/incubator-uniffle/tree/master/deploy/kubernetes/operator/config/manager/rss-webhook.yaml).

Run the following command:

```
kubectl apply -f ${webhook-yaml-file}
```

## Setup or Update Uniffle Controller

We can refer to [controller yaml file](https://github.com/apache/incubator-uniffle/tree/master/deploy/kubernetes/operator/config/manager/rss-controller.yaml).

Run the following command:

```
kubectl apply -f ${controller-yaml-file}
```

## How To Use

We can learn more details about usage of CRD
from [uniffle operator design](00-uniffle-operator-design.md).

## Examples

Example uses of CRD have been [provided](02-examples.md).
