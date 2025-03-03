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

### 1.1.3 - georchestraRole

An auxiliary LDAP object class, representing a geOrchestra role.

- partial OID: `1.1.3`
- complete OID: `1.3.6.1.4.1.53611.1.1.3`

### 1.2 - Attribute types

A "branch" for all custom LDAP attribute types.

- partial OID: `1.2`
- complete OID: `1.3.6.1.4.1.53611.1.2`

### 1.2.1 - privacyPolicyAgreementDate

A LDAP attribute, representing a date of agreement on privacy policy.

- partial OID: `1.2.1`
- complete OID: `1.3.6.1.4.1.53611.1.2.1`

### 1.2.2 - georchestraObjectIdentifier

A LDAP attribute, representing a geOrchestra unique object identifier,
in the form of a [UUID](https://www.rfc-editor.org/rfc/rfc9562.html).

- partial OID: `1.2.2`
- complete OID: `1.3.6.1.4.1.53611.1.2.2`

### 1.2.3 - oAuth2Provider

A LDAP attribute, representing an external identity provider identifier, in the
form of a character string.

- partial OID: `1.2.3`
- complete OID: `1.3.6.1.4.1.53611.1.2.2`

### 1.2.4 - oAuth2Uid

A LDAP attribute, representing an identifier for a user identified onto an
external identity provider, in the form of a character string.

- partial OID: `1.2.4`
- complete OID: `1.3.6.1.4.1.53611.1.2.4`

### 1.2.5 - orgUniqueId

A LDAP attribute, representing a unique identifier for a geOrchestra organisation
(e.g. can be the french SIRET number).

- partial OID: `1.2.5`
- complete OID: `1.3.6.1.4.1.53611.1.2.5`
