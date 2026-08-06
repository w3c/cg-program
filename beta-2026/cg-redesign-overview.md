# Overview of the W3C Community Group Specification Redesign

**Status:** This is a draft. We expect to add / link to stable mockups to illustrate key points.

The primary goals of the current Community Group specification redesign have been to more clearly communicate the status of a CG specification, make it easier to distinguish specifications created by CGs from those created by WGs, and more generally improve understanding of the relationship between W3C's incubation and standardization programs.

Note: This document focuses on key elements of the redesign project and does not cover other program improvements intended to lower barriers to transition to standardization.

# Elements of the redesign project

This project has involved a number of elements **beyond visual design** that we believe will further our goals.

* Early on we realized that the Community Group specification lifecycle (draft / final) was not rich enough to communicate important status information, so we created a [new CG lifecycle description](https://github.com/w3c/cg-program/blob/main/proposals/spec-lifecycle.md) that has three states: draft, transferred, and unmaintained. 
* We developed tools to gather implementation and adoption status for (at least some types of) specifications, and the redesigned specifications include status information inline. Beta testing demonstrated the appeal of this information.
* Beta testers confirmed for us that the URL of a document plays an important role in establishing trust in the material and an understanding of status. We are planning to publish both living and snapshot CG specifications on incubation.w3.org. CGs have expressed appreciation at having a "w3c url" for their specifications.  This will give readers more status information: the URL makes clear this is incubation.
* We have created more distance between WGs and CGs by moving CG GitHub repos into the w3c-cg organization (with a very small number of exceptions that are context-specific).

# Specification design

This project improves the design of three types of information:

* Color and style adjustments to make it easier to distinguish these specifications from WG specifications.
* Metadata at the top of the document.
* Status updates about the context of a specification (progress towards standardization, implementation and implementer support, adoption, etc.)

The new designs do not otherwise elements of the body of a specification (compared to current styles deployed in respec and bikeshed).

## Color adjustments

We have changed the background color of the body and table of contents to distinguish CG specifications from WG specifications. There are other design elements (e.g., boxes) to emphasize the distinction.

## Metadata at the top of the document

We have reorganized the information at the top of the document based on prioritization for clear communication, and based on beta feedback. The general structure of the top of the document has been prioritized to appear in this order:

* Specification title, followed in the same line by the status (Draft, Transferred, or Unmaintained). The status label links to a definition and more context for understanding the status.
* Incubation by: Groupname. The phrase "Incubation by" communicates status more clearly than "Published by."
* The next block highlights key status information, one of the following:
  * It is a living document that will be modified in place, both in terms of edits and updated status information.
  * It is a Snapshot (of a draft) that is for archival purposes.
  * This technology has been transferred, and links to more information.
  * This technology is no longer maintained.
* In the case of a living specification draft, the next information will be a progress bar towards the beginning of standardization, as well as key data about implementation support.
* In the case of a Draft, the next block will include links to more context status (implementation, adoption) and how to get involved in the work.
* Editor information
* Copyright information.

## Status updates

We include a table of specification context status (implementation, adoption, stability, etc.) at the bottom of the document. There will be links to this information both from the very top of the document and from the table of contents.

## Get involved

Through the redesign beta we learned that it was not clear enough in the current design how people could get involved in the project to help advance the work.

As a result, we have created a new section towards the end of the document about how to get more involved, which will cover topics such as:

* Joining the group
* Providing feedback on the specification
* Contributing to the test suite
* Learning more about community groups

Some of this information will be moved out of the (traditional) metadata at the top of the document, but it will be easily reachable via a prominent link

## In-place updates / status updates

In addition to the new status labels of the [new CG lifecycle description](https://github.com/w3c/cg-program/blob/main/proposals/spec-lifecycle.md), the redesign takes into account semantics associated with living specifications and snapshots as follows:

### Living specifications

* Each technology will have a living specification. Information at that URL will be updated in place over time. Thus, upon each reload, readers will find the latest context status (implementation, adoption signals, etc.); see below for information about [status metadata management](#status-metadata-management). We make clear in th redesign that "this is the place for the latest information about this work."
* When a technology is transferred for standardization, or if it is no longer maintained, we will update the living specification in place (via JavaScript) to communicate clearly this change in status (and where to find more information).

### Snapshots

* The redesign makes much clearer the expectation that the content of a snapshot is archival and is not expected to change over time.
* We make clear to users where to find the latest information about the technology (outside the snapshot).


## Additional considerations

The redesign includes considerations for:

* Desktop and mobile layouts
* Light and dark modes
* Warnings about limitations when offline
* Accessibility

# Status metadata management

At a high level, the [status metadata system](https://github.com/w3c/cg-spec-metadata) that powers the in-place updates in specifications works as follows:

* We have implemented "collectors" that are fine-tuned for gathering information of interest to developers and adopters. 
* A recurring job (e.g., every few hours) runs the collectors for each specification and publishes the data for each specification on GitHub. 
* That data is mirrored on w3.org (where it can be cached, backed up, etc.).
* The JavaScript in each **living specification** reads the status metadata on load.

The system also supports "overrides" of the automatically collected data. Editors, Chairs, and the staff can create pull requests to modify data (e.g., to indicate that a specification is no longer a draft and has been transferred) or make corrections.

The collectors that have been created so far are well-suited to
browser APIs. We expect to develop more collectors for other types of
specifications.


# Status as of August 2026

| Element  | Status |
| ------------- | ------------- |
| CG specification lifecycle update | [Lifecycle description](https://github.com/w3c/cg-program/blob/main/proposals/spec-lifecycle.md) has been developed and is the basis for other work |
| Visual redesign | An initial redesign was beta tested and has evolved based on feedback; a mature design now exists. We need to test the mature design and complete our integration in respec and bikeshed | 
| Status metadata in living specs | [Tooling works](https://github.com/w3c/cg-spec-metadata) and there is [some documentation](https://github.com/w3c/cg-spec-metadata/blob/main/metadata.md), but more is needed and we need to experiment with editors |
| incubation.w3.org  | Mature proposal an implementation plan in place within the staff  |
| Moving Community Group repos from the w3c GitHub organization to the w3c-cg organization.  | Only a small number of CG repos remain in the w3c organization  |


