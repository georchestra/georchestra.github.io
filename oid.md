---
layout: page
lang: en
title: geOrchestra OID registry
uid: oid
permalink: /oid.html
---

The geOrchestra root OID is `1.3.6.1.4.1.53611` (see the
[IANA PEN list](https://www.iana.org/assignments/enterprise-numbers/enterprise-numbers)).

### 1 - LDAP

A "branch" for all custom LDAP definitions.

- partial OID: `1`
- complete OID: `1.3.6.1.4.1.53611.1`

### 1.1 - Object classes

A "branch" for all custom LDAP object classes.

- partial OID: `1.1`
- complete OID: `1.3.6.1.4.1.53611.1.1`

### 1.1.1 - georchestraUser

An auxiliary LDAP object class, representing a geOrchestra user.

- partial OID: `1.1.1`
- complete OID: `1.3.6.1.4.1.53611.1.1.1`

### 1.1.2 - georchestraOrg

An auxiliary LDAP object class, representing a geOrchestra organisation.

- partial OID: `1.1.2`
- complete OID: `1.3.6.1.4.1.53611.1.1.2`

### 1.2 - Attribute types

A "branch" for all custom LDAP attribute types.

- partial OID: `1.2`
- complete OID: `1.3.6.1.4.1.53611.1.2`

### 1.2.1 - privacyPolicyAgreementDate

A LDAP attribute, representing a date of agreement on privacy policy.

- partial OID: `1.2.1`
- complete OID: `1.3.6.1.4.1.53611.1.2.1`

### 1.2.2

A LDAP attribute, representing any kind of custom attribute. For exemple post codes, internal ids
etc...

- partial OID: `1.2.2`
- complete OID: `1.3.6.1.4.1.53611.1.2.2`
