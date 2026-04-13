---
title: Standardization and Incubation at W3C
---

# Status

This is a draft document that was developed to support the beta test for new CG specification designs. Following the beta, we anticipate integrating
this text into the main w3.org content.

# Introduction

As stated in the [W3C Vision](https://www.w3.org/TR/w3c-vision/), “The fundamental function of W3C is to provide an open forum where diverse voices from around the world and from different organizations and industries work together to evolve the web by building consensus on voluntary global standards for Web technologies.” 

W3C supports the community working together on Web technology specifications through two main programs:

* **The Recommendation Track (for standardization)**. <a id="standardization"></a> The W3C Recommendation Track is designed to solidify support for a technology and increase its quality through requirements for consensus decisions, public reviews, implementation, and demonstrated interoperability. **Specifications on the Recommendation Track are on W3C’s roadmap for the Web.** W3C standards, called W3C Recommendations, are exclusively published by W3C Working Groups.

* **Community Groups (for incubation)**. <a id="incubation"></a> In order to make it easy for people to introduce new ideas for the Web, W3C hosts the “Community Groups” program. This program uses a lightweight process by design so that contributors can iterate quickly with limited constraints early in the life of an unproven technology. **Community Group specifications represent community-driven incubation, but are not on W3C’s roadmap for the Web and are not W3C standards.** When Community Group specifications gain traction, they may advance to standardization, either at W3C or another organization.

This document includes:

* Guidance on understanding the status of a specification.  
* A comparison of properties of Recommendation Track and Community Group specifications.  
* A comparison of properties of Working Groups (for standardization) and Community Groups (for incubation).  
* Although the focus of this document is on incubation and standardization, W3C also publishes other types of deliverables (e.g., W3C Statements); these are briefly discussed at the end of the document.

# Understanding specification status

Developers, implementers, and other direct users of a specification generally want to understand its status and will have questions such as:

* Is this specification stable?  
* How interoperably has it been implemented?  
* Are people adopting this technology?  
* What guarantees come with this specification?

If you are interested in implementing, adopting, or referring to a specification, please review the following sections on understanding specification status to make informed usage decisions.

## Standardization v. Incubation

When consulting a specification, the recommended first step is to understand whether it is a community-driven incubation (a Community Group specification) or on the standards track (a Working Group specification).

W3C Community Groups are lightweight by design to encourage innovation through rapid iteration. Community Group specifications can be appropriate for experimentation, but these technologies are not on W3C’s roadmap for the Web and carry few guarantees.

Working Group specifications offer more protections for participants and additional steps to ensure specification quality and interoperability as they mature. 

When W3C Groups and other standards bodies want to refer to specifications, they should consider the stability, associated patent commitments, level of endorsement, and overall quality of the referenced specification. **Note**: The [W3C Normative References policy](https://www.w3.org/guide/process/tilt/normative-references.html) governs references from Recommendation Track Documents.

## Lifecycles and maturity level

Each program (incubation and standardization) defines a lifecycle for specifications developed in that program. The second step when consulting a specification is to understand its maturity in that lifecycle. The tables below compare the properties and guarantees of specifications associated with each lifecycle maturity level.

**Note**: Beginning in 2026, W3C plans to enhance the lifecycle of Community Group specifications (beyond “Draft” and “Final”) based on extensive experience and invites feedback on the [proposed CG specification lifecycle](https://github.com/w3c/cg-program/blob/main/proposals/spec-lifecycle.md).

## Status section

The general-purpose labels (program, maturity level) convey some information about guarantees, but do not tell a “detailed story” about a specification. For this reason, each specification includes a “status section” with custom usage guidance for that specification. The third step when consulting a specification is to review the status section.

**Note**: Beginning in 2026, W3C is experimenting with providing additional metadata in Community Group specifications to help communicate more clearly information about implementer traction, adoption, and known standardization plans.

## Stability topics

### Living specification v. snapshot

For most situations, the Web standards community generally prefers “living specifications,” where the group that publishes the specification updates it in place as the technology evolves. Readers should expect that the specification *at that URL* will change over time.

In some situations there is value to creating a snapshot of a specification, with a commitment from W3C that the content of the specification *at that URL* will not change over time. Snapshots are most frequently used so that intellectual property commitments can be attached to unchanging text.

### Editors drafts

Groups handle proposals to change specifications in different ways. For example, merge proposals (e.g., via GitHub pull requests) directly into a specification after group approval. 

In other cases, the Editor works on a publicly available “Editor’s Draft.” Editor’s Drafts have no formal standing in any W3C process. From time to time the group may approve the Editor’s Draft and the content is published as a group draft. 

# Specification process comparison

As the table below shows, Community Groups have a lighter-weight process to make it easier to iterate and possibly fail quickly on new technology ideas. 

The Recommendation Track requires reviews and implementation experience to increase (and strengthen) guarantees that adopters can rely on. The public [reviews](https://www.w3.org/policies/process/#wide-review) conducted during the Recommendation Track process include reviews to help ensure that future Web standards support W3C values. These “horizontal reviews” cover topics such as accessibility, internationalization, security, privacy, and Web architecture.


| Requirements | Working Group specifications (Recommendation Track) |  Community Group specifications |
| ----- | ----- | ----- |
| **Wide review (including horizontal reviews)** | Yes | No |
| **Implementation experience** | Yes | No |

**Note**: Both Working Group and Community Group specifications are always available publicly at no cost.

## Specification lifecycles

W3C Working Groups and Community Groups can both publish technical specifications, but their lifecycles are governed by different processes.

For standardization, W3C makes a number of commitments for the development and long-term maintenance of Recommendations so that adopters of the standards may depend on them. The W3C community pursues these commitments through consensus-building, systematic specification reviews, implementation and testing, predictable intellectual property commitments, and persistent public availability. 

For Community Groups, W3C does not make these commitments. In some cases, Community Groups do pursue and achieve some of the same goals (e.g., interoperable implementations).

|  | **WG Working Draft** | **WG Candidate Rec. Snapshot** | **WG Recommendation** | **CG Draft** | **CG Final** |
| **On W3C’s roadmap for the Web** | Yes | Yes | Yes | No | No |
| **Represents W3C-wide endorsement** | No | No | Yes | No | No |
| **Stability** | Unstable / in development | Stable but not completed | Stable and completed (as a standard) | Unstable / in development | Stable and completed  (as incubation) |
| **Satisfies chartered requirements and dependencies** | Unknown | Yes | Yes | Unknown  | Unknown |
| **Has received wide review (including horizontal reviews)** | Unknown | Yes | Yes | Unknown  |  Unknown |
| **Has adequate implementation experience** | Unknown | Unknown | Yes | Unknown |  Unknown |
| **Benefits from royalty-free patent commitments** | No | Yes (for Snapshots published since 2020) | Yes | From contributors for their contributions | For the full text of the specification from anyone who has opted in to make a full specification commitment  |

**Note**: A Candidate Recommendation Snapshot that has been revised but does not yet fulfill the requirements for that status is called a Candidate Recommendation Draft. See below for information on Recommendation Track deprecation labels.

## Intellectual property and specifications

One key to the success of the open Web and a core principle of the [W3C Vision](https://www.w3.org/TR/w3c-vision/) is that Web technology be broadly available to implementers on a royalty-free basis. For this reason, W3C asks participants to make intellectual property (IPR) commitments when they join groups. Community Groups have a lighter-weight IPR policy (to foster innovation) but Working Groups provide better patent protection (suitable for global standards).

|  | Working Group specifications (Recommendation Track) |  Community Group specifications |
| :---- | ----- | ----- |
| **Patent Policy and copyright licensing** | [W3C Patent Policy](https://www.w3.org/policies/patent-policy/) for patent commitments, and generally the [W3C Software and Document License](https://www.w3.org/copyright/software-license-2023/) for copyright (though in rare cases the less permissive [Document License](https://www.w3.org/copyright/document-license-2023/)). | [Community Group Contributor License Agreement (CLA)](https://www.w3.org/community/about/process/cla/) for draft specifications and optionally [Final Specification Agreement](https://www.w3.org/community/about/process/final/) for stable specifications; see the [summary](https://www.w3.org/community/about/process/summary/). |
| **Royalty-Free patent licensing commitments** | [Royalty-Free licensing commitments](https://www.w3.org/policies/patent-policy/#sec-Requirements) for the full text of a specification from all group participants. These commitments come into effect when a WG specification reached Candidate Recommendation status. (Prior to 2020 they came into effect only at Recommendation.) | [Royalty-Free licensing commitments](https://www.w3.org/policies/patent-policy/#sec-Requirements) for one’s contributions. For stable CG specifications (called “Final Reports”) a group calls for (optional) full-text commitments from group participants. |
| **Organizational IPR commitments** | The Advisory Committee Representative of a W3C Member makes an organizational commitment for all deliverables of the group. | The Advisory Committee Representative of a W3C Member makes an organizational commitment. For non-Members, W3C seeks organizational commitments but evaluates each request to determine if an organizational commitment is unnecessary. |
| **Individual IPR commitments** | Invited Experts make individual commitments. | Unaffiliated individuals make individual commitments. |
| **Patent exclusion opportunities**  | Yes, for a limited window of time. W3C convenes a Patent Advisory Group to address such situations. | None, but there’s an opt-out period to withdraw a contribution. |

# Group governance

Community Groups have a lighter-weight process so that groups can iterate quickly over new ideas and “fork” if necessary (since it is easy to create a new CG). On the other hand, Working Groups offer more protections to participants and others in the ecosystem, which provides more incentives for participants to work together to reach consensus decisions, and provides confidence to regulators that all participants are afforded due process. For baseline protections in both types of groups, all participation is grounded in the [W3C Code of Conduct](%20https://www.w3.org/policies/code-of-conduct/%20) and [W3C Antitrust and Competition Policy](https://www.w3.org/policies/antitrust-2024/). 

## Participation

The criteria for participation vary by group type. 

|  | Working Groups (Recommendation Track) |  Community Groups |
| :---- | ----- | ----- |
| **Organizational participation** | [W3C Member](https://www.w3.org/membership/) representatives. Advisory Committee Representatives join groups on behalf of W3C Members. | Any organization may participate, without fee. Individuals join groups on behalf of the organization identified via the “affiliation” part of their W3C account. |
| **Individual participation** | By invitation, see the [W3C Invited Expert policy](https://www.w3.org/policies/process/#invited-expert-wg). | Anyone, without fee. Individuals join groups on their own behalf if the “affiliation” in their W3C account is “none.” |

## Group creation and chairing

For a technology to become part of W3C’s roadmap for the Web, W3C has a number of requirements for charter development, review and support by the Membership (in particular of the scope of work), and chair selection. For incubation, it is much easier to start a new group because the W3C community as a whole has not yet invested in the future of that group.

|  | Working Groups (Recommendation Track) |  Community Groups |
| :---- | ----- | ----- |
| **Process description** | [W3C Process](https://www.w3.org/policies/process/) | [Community Group process](https://www.w3.org/community/about/process/) |
| **List of current groups** | [Working Groups](https://www.w3.org/groups/wg/) | [Community Groups](https://www.w3.org/groups/cg/) |
| **Who can propose a group** | An Advisory Committee representative may request that the W3C staff initiate “[charter refinement](https://www.w3.org/policies/process/#charter-initiation).” After successful refinement, the W3C staff proposes charters to the Membership for formal review. | Anyone, at no cost |
| **Chair approval** | W3C staff per [W3C Process](https://www.w3.org/policies/process/#ReqsAllGroups) | Determined by CG participants |

**Note:** W3C publicly announces the creation of all groups (on the mailing list [public-new-work@w3.org](https://lists.w3.org/Archives/Public/public-new-work/)).

## Group charters

A charter defines a group’s scope, deliverables, and some aspects of its operations. All proposed Working Group charters are reviewed by the Membership prior to group creation. Community Groups are not required to have charters but it is considered good practice. CG charters are not reviewed by the Membership, indeed frequently a CG charter is created by the participants after the launch of the group.

|  | Working Groups (Recommendation Track) |  Community Groups |
| :---- | ----- | ----- |
| **Group charter** | Required ([How to create a WG charter](https://www.w3.org/guide/process/charter.html)) | Recommended ([CG charter template](https://w3c.github.io/cg-charter/CGCharter.html)) |
| **Charter review before group creation** | [W3C process](https://www.w3.org/policies/process/#group-lifecycle) defines an early community review phase, then formal review by the Membership. | Minimal validation by W3C staff. |

**Note**: Both Working Group and Community Group technical proceedings and deliverables are required to be publicly available.

## Group decisions

All Working Groups follow the same decision processes defined in the W3C Process Document, designed to provide fairness, due process, and assurances to participants and external stakeholders. Community Groups have more discretion to define their own decision processes. It is by design (to enable fast innovation) that Community Groups provide fewer protections than Working Groups.

|  | Working Groups (Recommendation Track) |  Community Groups |
| :---- | ----- | ----- |
| **Group decision process** | Defined in W3C Process; consensus required. | Determined by CG; consensus recommended but not required. |
| **Formal objection handling** | [Defined in W3C Process](https://www.w3.org/policies/process/#addressing-fo); all Formal Objections must be given due consideration. | Determined by CG; not required. |
| **Decision appeal path** | [Defined in W3C Process](https://www.w3.org/policies/process/#ACAppeal) | None (The W3C staff is working on a [revision to the CG Process](https://github.com/w3c/cg-program/blob/main/proposals/cg-process.md#decisions-and-appeals) to include an appeal path for non-technical decisions.) |
| **Requirement to address all feedback of non-participants** | Yes | No |

# Other W3C deliverables

Beyond incubation and standardization, W3C groups may publish a variety of other deliverables. 

## Recommendation Track deprecation labels

When Recommendations no longer serve their intended purpose, W3C may un-Recommend them down in different ways:

* A Superseded Recommendation has been replaced by a newer version that W3C prefers.  
* An Obsolete Recommendation is one that lacks sufficient market relevance.  
* When W3C no longer endorses a specification and believes there is no reasonable prospect of it being restored, it rescinds the specification. This can be a Rescinded Recommendation or a Rescinded Candidate Recommendation.

## Statements, registries, and notes

Beyond the Recommendation Track and Community Group program, W3C publishes other types of documents and other deliverables. These documents **are not W3C standards** and do not have associated patent commitments.

| Type of deliverable | What entity publishes | Level of W3C endorsement in final state | Lifecycle before final state |
| ----- | ----- | ----- | ----- |
| **[W3C Statements](https://www.w3.org/policies/process/#w3c-statement)** | Working Groups, Interest Groups, TAG, or Advisory Board | Endorsed by W3C | Previously published Group Note |
| **[Registries](https://www.w3.org/policies/process/#registries)** | Working Groups | Endorsed by W3C | Draft Registry, Candidate Registry |
| **[Group Notes](https://www.w3.org/policies/process/#note-track)** | Working Groups, Interest Groups, TAG, or Advisory Board | Endorsed by the group that published it | Draft Note |

