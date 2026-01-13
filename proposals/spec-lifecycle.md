# CG Specification Lifecycle
Status: This is a proposal for discussion; it does not yet represent consensus.

This topic was discussed in a breakout session during the AC 2025 meeting; see the [slides](https://www.w3.org/2025/Talks/cg-breakout-ac2025.pdf).

# Motivation

The full life cycle of _W3C Working Group specifications_ has grown more complex over time as a tool to communicate important information to readers of a specification such as:

* The measure of consensus associated with a specification.
* Whether a specification should be implemented experimentally or has been successfully implemented by independent parties.
* Whether wide review is actively being sought.
* W3C endorsement signals:
   * W3C as an organization endorses the work.
   * W3C has rescinded such endorsement.
   * The work has been abandoned prior to endorsement.

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
* **Abandoned**
   * Meaning: No Community Group is currently working on the specification and W3C is not aware that the specification is under development elsewhere. The status section of the document explains the context.
* **Transferred** 
   * Meaning: No Community Group is currently working on the specification and it has been transferred elsewhere for more development or standardization. The status section of the document explains the context.

### Living documents v snapshots

Groups generally publish living documents, meaning they make changes in place (at the same URL).

There are situations (e.g., related to IPR) where it is useful or necessary to create snapshots of a document with the expectation
that no substantive changes will be made over time at that URL. 

It will be useful to communicate to readers when they are looking at a snapshot versus a living document.

**Note**: For groups with different levels or versions of specifications, it will also be useful to communicate
to readers when a new level or version is available.

### Progress bar

During a TPAC 2025 breakout sessions regarding clear communication about CG Specification status, there were suggestions for a "progress bar" to help readers understand the relative maturity of a Draft Specification. As of January 2026, the staff is working on such a progress bar that would leverage some of the status signals described in the next section. Specifically, the progress bar is likely to reflect the following:

* Early in the the lifecycle
* Experimentation implementation available
* Standardization plans available

The progress bar would also reflect the end maturity level, whether Transferred or Abandoned.


## Status signals

### Version management

Status signals are likely to come from both curated sources and metadata already managed in other venues.

### Specification development status

* **Group status**. Typically managed through W3C database (e.g., group open, closed, or dormant)
* **Community support**. Is there strong support for the specification? Strong opposition? Alternative proposals?
* **Specification stability**. Indicate community expectation for specification stability. Would significant changes disrupt the ecosystem of the Specification (e.g., in terms of adoption or references)? One specific use case is to send a "last call" stability signal. Could include "last modified" date here or in details section.

### Implementation information and guidance

The group encourages experimental implementation and feedback (or "not yet").

* **Implementation traction**. Are potential implementers of the specification participating in its development? Are there experimental implementations or plans? Determined from announcements of intent to prototype, implement, ship; automated detection of shipping features.
* **Test suite**. URL to tests or 'None'

### Adopter guidance
This technology is experimental and **will** change. 

* **Experimentation status**. Whether it is a good time to experiment with the technology (or not).
* **Known adopter interest**. Identify known pilots or experiments, examples of real-world deployments or expressions of interests to use the relevant feature.
* **Patent licensing commitments**. Typically determined by CLA, but will differ if spec was part of a call for final specification commitments.

### Standardization plan

This is **not** a W3C standard. Standardization plans:

* **Plans**.  We are developing separately ideas for metadata to describe standardization plans (e.g., if plan to standardize, what venue and on what schedule); whether that data lives in a separate document or is part of other status signals data remains to be seen.
* **Revision management**. Does the CG work on new versions only? Does it provide input to a standards group on an ongoing basis? Note: This information is only necessary for the stage "transferred".

## Detailed information

This information might appear after the "top line" status signals (e.g., in expandable UX).

### Implementations

We foresee a list of implementation blocks. For each block:

* **Name**
* **Class of implementation** 
  * Example: browser
  * Example: server 
  * Example: plug-in or polyfill
* **Status of implementation**
  * Intent to implement
  * Prototype
  * Shipping

### Ideas for data management

* Status information is specified in a file in the specification repo. It should be easy to determine the last modified date of that file.
* The status information is surfaced in the specification (at least).
   * Integrate into respec and bikeshed
   * for snapshots, the status is the one set at time of publication
   * for live documents, by default it is the one set of a time of publication, but we expect there will be a (JavaScript) mechanism that allows to mark documents as abandoned/transferred via data under W3C's control, to be used when the live doc does not reflect the real status of the spec and can't be otherwise updated (e.g. no one active with write access to the repo)
* Editors are responsible for maintaining the data.
* Nice to have: notification of status changes.
* Tools can monitor status information and report findings, such as:
   * The file says there's one implementation, but we detect more than one.
   * The file set an expectation about a time frame for advancement to another SDO and that time has elapsed.

## Usage Guidance

* Reports (and repos) should include usage guidance that depend on the maturity level and status signals. It might be interesting to see if we can generate the usage guidance systematically for each combination of maturity level and status signals.
   * Standardization expectation = “intent => This specification appears to be gaining traction and the CG has indicated an intent to advance to standardization. We recommend checking periodically to see whether the specification has been transferred to a group for standardization.”

