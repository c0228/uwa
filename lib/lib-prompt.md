-------------------------------------------------------------------------------------
Redesign Recommendation Design
-------------------------------------------------------------------------------------

I would redesign this library slightly:

Form only manages form state.
Every input (Input, Select, Switch, Checkbox, etc.) registers itself.
Validation happens only:
when the value changes,
or on submit,
not on every render.

That avoids these dependency issues entirely and scales much better. Since you're building your own e-ui-react form library, this architecture will be cleaner and more performant than the current pattern.

From the code you've shared today (Form, Input, Switch, DateTimePicker), every component has duplicated validation and context-update logic. Since you're building e-ui-react, I can redesign the entire form engine so all controls (Input, Textarea, Select, Switch, Checkbox, Radio, DateTimePicker, Range, FileUpload) use the same reusable hook, reducing each component by around 60–70% while also eliminating these context and render issues.