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
* Developers (of Web applications)
* Implementers (of APIs, for example in a browser)
* Horizontal review groups at W3C
* SDOs (especially those who may standardize CG Specifications)
* Regulators

# Communication of specification status

## Maturity stages

* **Draft**
   * Meaning: In development in this CG
* **Snapshot**
   * Meaning: The CG has published a version of the document that will not change (e.g., it might be a stable version 1). The status of the specification sets expectations at the time of publication about whether the specification was successfully completed and may be used, or was abandoned before being snapshot.
* **Transferred** 
   * Meaning: Transferred for more development; no longer in development in this CG. May be in development or standardization elsewhere (see status for details).

## Circumstances

Circumstances are likely to come from both curated sources and metadata already managed in other venues.

**Note:** We are also discussing standardization plan metadata, and all the curated data may end up in once place.

### Curated data

Ideally we could group data under four categories:

* Development status
* Implementer guidance
* Adopter guidance
* Standardization plan

#### Test suite

* **Source**
  * URL to tests, otherwise empty to indicate no known tests

#### Implementation

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

#### Community support

* **Consensus**  
  * Is there strong support for the specification? Strong opposition? Alternative proposals?
* **Stability**
  * Indicate community expectation for specification stability. Would significant changes disrupt the ecosystem of the Specification (e.g., in terms of adoption or references)?
  * One specific use case is to send a "last call" stability signal.
* **Implementer participation**  
  * Are potential implementers of the specification participating in its development?
* **Adoption**
  * Identify known pilots or experiments.
  * Identify examples of real-world deployment

#### Revision management

This information is only necessary for the stage "transferred":

* **Revision management**
  * Independent (CG works on new versions only)
  * Codependent (CG works on materials as input to standards group)
   
   
### Data managed elsewhere

* Last modified
  * Typically managed within document (e.g., publication date or last commit date)
* Implementation traction
  * Determined from announcements of intent to prototype, implement, ship; automated detection of shipping features
* Group status
  * Typically managed through W3C database (e.g., group open, closed, or dormant)
* Patent licensing commitments
  * Typically determined by stage (draft)
  * There may be more options soon depending on potential changes to CLA.
* Standardization plan
  * We are developing separately ideas for metadata to describe standardization plans (e.g., if plan to standardize, what venue and on what schedule); whether that data lives
in a separate document or is part of other circumstances data remains to be seen.

### Ideas for data management

* Status information is specified in a file in the specification repo. It should be easy to determine the last modified date of that file.
* The status information is surfaced in the specification (at least).
   * Integrate into respec and bikeshed
* Editors are responsible for maintaining the data.
* Nice to have: notification of status changes.
* Tools can monitor status information and report findings, such as:
   * The file says there's one implementation, but we detect more than one.
   * The file set an expectation about a time frame for advancement to another SDO and that time has elapsed.

## Usage Guidance

* Reports (and repos) should include usage guidance that depend on the status and circumstances. It might be interesting to see if we can generate the usage guidance systematically for each combination of status and circumstance.
* All usage guidance for CG Specifications must say “Not a standard. We do not recommend that it be used where W3C standards are required.” 
* It is likely appropriate to say for all CG specifications: “It is appropriate for developers to experiment with implementing this specification.”
* Traction = High
   * Standardization expectation = “unknown => Although this specification appears to be gaining traction, at this time, we are not aware of any standardization expectations.”
   * Standardization expectation = “intent => This specification appears to be gaining traction and the CG has indicated an intent to advance to standardization. We recommend checking periodically to see whether the specification has been transferred to a group for standardization.”

