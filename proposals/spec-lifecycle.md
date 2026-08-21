# CG Specification Lifecycle
Status: This is a proposal for discussion; it does not yet represent consensus. See also the [description of W3C incubation and standardization programs](https://github.com/w3c/cg-program/blob/main/beta-2026/w3c-programs.md).

# Motivation

The full life cycle of _W3C Working Group specifications_ has grown more complex over time as a tool to communicate important information to readers of a specification such as:

* The measure of consensus associated with a specification.
* Whether a specification should be implemented experimentally or has been successfully implemented by independent parties.
* Whether wide review is actively being sought.
* W3C endorsement signals:
   * W3C as an organization endorses the work.
   * W3C has rescinded such endorsement.
   * The work is no longer maintained, and is without endorsement.

For _Community Group specifications_, we have historically only identified two stages:

* Draft
* Final. The “Final” stage has served two purposes:
   * Set expectations that the specification is stable.
   * Secure stronger IPR commitments, for example, as a precursor to transferring the specification to a Working Group for standardization.

However, we observe that more stages could be useful to communicate certain realities:

* Another organization has taken up the work (e.g., for standardization) and so the Community Group is no longer the “owner.”
* A Community Group has stopped work either following an explicit decision or because they abandoned their work.

In addition, as part of a plan to enhance the Community Group program, we plan to improve communication about the status of Community Group specifications and how to use or refer to them.

# Audiences

We seek to communicate specification status to these audiences:

* CG Participants
* Implementers (of APIs, for example in a browser)
* Adopters (e.g., developers of Web applications)
* Horizontal review groups at W3C
* SDOs (especially those who may standardize CG Specifications)
* Regulators

# Communication of specification status

## Maturity stages

* **Draft**
   * Meaning: A Community Group is currently working on the specification.
* **Unmaintained**
   * Meaning: No Community Group is currently working on the specification and W3C is not aware that the specification is under development elsewhere. The status section of the document explains the context.
* **Transferred** 
   * Meaning: No Community Group is currently working on the specification and it has been transferred elsewhere for more development or standardization. The status section of the document explains the context.

## Living documents v snapshots

Groups generally publish living documents, meaning they make changes in place (at the same URL).

There are situations (e.g., related to IPR) where it is useful or necessary to create snapshots of a document with the expectation
that no substantive changes will be made over time at that URL. 

It will be useful to communicate to readers when they are looking at a snapshot versus a living document.

**Note**: For groups with different levels or versions of specifications, it will also be useful to communicate
to readers when a new level or version is available.

## Progress bar

Living CG specification drafts include the following states in a progress bar:

* Early idea
  * This is the default
* Implementer experimentation
  * Signals include intent to prototype, origin trial
* Partial availability
  * Signals: At least one implementation is shipping, there may be statements about standardization plans
  * In some cases there may be multiple implementations, but there might also be some opposition. 
  * In some cases there may even be strong interoperability but standardization in an SDO may not yet be started.
* Standardization started
  * This means that some or all of this specification is now undergoing standardization (e.g., in a W3C Working Group). 
  * When a Community Group continues to work on a living specification after transferring some material to a group for standardization, the CG can decide whether it wants to indicate "Standardization started" even as it develops the living specification, or whether it wants to return to an earlier state of the progress bar to indicate more of a departure from what has been transferred. In either case, the document status section should describe the relationship between the CG and WG activities.

## Status signals

See the [cg-spec-metadata](https://github.com/w3c/cg-spec-metadata/blob/main/metadata.md) that is used to populate "usage guidance" tables in the redesigned specifications (starting in 2026).

## History

This topic was discussed in a breakout session during the AC 2025 meeting; see the [slides](https://www.w3.org/2025/Talks/cg-breakout-ac2025.pdf).
