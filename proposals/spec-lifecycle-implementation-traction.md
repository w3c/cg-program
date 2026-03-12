# Describing Implementation Traction

Capturing and representing the likelihood of traction for a given specification by would-be implementors require adapting to the specific implementation ecosystem the specification targets.

This proposal currently focuses only on the browser ecosystem as it is the most instrumented to capture the various nuances of interest from implementers. We expect to provide (likely simpler) mechanisms to capture similar information from other ecosystems.

## Browser implementer ecosystem

To capture the full range of intentions in the browser ecosystem, we suggest distinguishing:
* browser distributors, e.g. Google, Microsoft, Mozilla, Apple,…
* browser implementers - the same, but also organizations known to contribute to browser implementation, e.g. Igalia, Intel,…
* shipping browsers, e.g. Chrome, Edge, Firefox, Safari, …
* browser codebase, which for simplicity we suggest designating by the underlying rendering engine: Chromium, Gecko, WebKit, …

We think the following signals can be attribued to these types of entities to inform how much traction a specification has or is likely to gain. These are ordered from the least significative to the most:
* browser implementers making substantive contributions to the spec
* browser distributors or browser codebase publishing their "standards position" in the spec - at this stage, Mozilla (an implementer) and WebKit (a codebase) publish standard positions
* browser codebase being updated with an implementation of the spec
* browser distributor distributing the said implementation in a restricted fashion (behind a flag, through an origin trial, or in a pre-release version)
* browser distributor distributing the said implementation in their release version

Given existing research about which compatibility data developers use to make decision on whether to adopt or not a web feature, we propose to document by default information matching the [WebDX Community Group core browser set](https://web-platform-dx.github.io/web-features/#how-do-features-become-part-of-baseline%3F), but leaving it possible to document additional browsers, codebases, distributors and implementers.
