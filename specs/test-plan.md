# SwiftTranslator Test Plan

## Overview
SwiftTranslator is a Singlish ↔ Sinhala bidirectional translator web application with additional features like auto-correct, touchpad input, and file operations.

## Application Features
- Singlish to Sinhala translation
- Language switching/swapping
- Word autocorrect functionality
- Sinhala touchpad (character picker)
- Text editing tools (Undo, Redo)
- Clipboard operations (Copy, Cut, Paste)
- File operations (Open file)
- Clear functionality
- Language selection dropdown (Singlish, Sinhala)
- Help feature

---

## Test Suites

### 1. Translation Functionality Tests
#### TC-001: Basic Singlish to Sinhala Translation
- **Steps:**
  1. Enter "Ayubowan" in the Singlish input field
  2. Observe the output in the Sinhala field
- **Expected Result:** Input should be translated to corresponding Sinhala text

#### TC-002: Basic Sinhala to Singlish Translation
- **Steps:**
  1. Click "Swap Languages" button
  2. Enter Sinhala text in the input field
  3. Observe the output
- **Expected Result:** Sinhala text translates to Singlish output

#### TC-003: Empty Input Translation
- **Steps:**
  1. Leave the input field empty
  2. Check the output field
- **Expected Result:** Output field should be empty or show no translation

#### TC-004: Multiple Word Translation
- **Steps:**
  1. Enter "Hello, how are you?" in Singlish input
  2. Observe translation output
- **Expected Result:** Full phrase should translate appropriately

---

### 2. Text Editing Operations
#### TC-005: Undo Functionality
- **Steps:**
  1. Enter text "hello"
  2. Add more text " world"
  3. Click "Undo" button
  4. Verify input field content
- **Expected Result:** Last action should be undone, showing only "hello"

#### TC-006: Redo Functionality
- **Steps:**
  1. Perform steps from TC-005
  2. Click "Redo" button
- **Expected Result:** Undone action should be restored, showing "hello world"

#### TC-007: Copy from Input
- **Steps:**
  1. Enter "Singlish text" in input field
  2. Click "Copy" button in input section
  3. Paste into another application or field
- **Expected Result:** Text should be copied to clipboard

#### TC-008: Copy from Output
- **Steps:**
  1. Enter Singlish text that gets translated
  2. Click "Copy" button in output section
  3. Paste into another application
- **Expected Result:** Translated text should be copied to clipboard

#### TC-009: Cut Operation
- **Steps:**
  1. Enter "test text" in input field
  2. Click "Cut" button
- **Expected Result:** Text should be removed from field and copied to clipboard

#### TC-010: Paste Operation
- **Steps:**
  1. Copy text from external source
  2. Click in input field
  3. Click "Paste" button
- **Expected Result:** Copied text should be pasted into the field

#### TC-011: Clear Input Field
- **Steps:**
  1. Enter "some text" in input field
  2. Click "Clear" button in input section
- **Expected Result:** Input field should be emptied

#### TC-012: Clear Output Field
- **Steps:**
  1. Enter Singlish text that translates
  2. Click "Clear" button in output section
- **Expected Result:** Output field should be emptied

#### TC-013: Clear All Button
- **Steps:**
  1. Enter text in input field
  2. Generate translation
  3. Click main "Clear" button (🗑️ Clear)
- **Expected Result:** Both input and output fields should be cleared

---

### 3. Language Switching
#### TC-014: Swap Languages Button
- **Steps:**
  1. Verify input is labeled "Singlish"
  2. Verify output is labeled "Sinhala"
  3. Click "Swap Languages" button
  4. Verify labels have switched
- **Expected Result:** Input should now be "Sinhala" and output "Singlish"

#### TC-015: Language Dropdown Selection - Singlish
- **Steps:**
  1. Click language dropdown
  2. Select "Singlish"
- **Expected Result:** Application should set typing language to Singlish

#### TC-016: Language Dropdown Selection - Sinhala
- **Steps:**
  1. Click language dropdown
  2. Select "Sinhala"
- **Expected Result:** Application should set typing language to Sinhala

---

### 4. Word Autocorrect Feature
#### TC-017: Enable Autocorrect
- **Steps:**
  1. Locate the "Word Autocorrect" feature checkbox
  2. Verify checkbox is available
  3. Check the checkbox (if unchecked)
- **Expected Result:** Autocorrect feature should be enabled

#### TC-018: Autocorrect Common Typos
- **Steps:**
  1. Ensure autocorrect is enabled
  2. Enter a common typo (e.g., "helo" instead of "hello")
  3. Observe the correction
- **Expected Result:** Typo should be automatically corrected

#### TC-019: Disable Autocorrect
- **Steps:**
  1. Uncheck the "Word Autocorrect" checkbox
  2. Enter a typo
- **Expected Result:** Typo should not be auto-corrected

---

### 5. Sinhala Touchpad/Character Picker
#### TC-020: Sinhala Character Selection
- **Steps:**
  1. Click on a vowel button (e.g., "අ")
  2. Verify it appears in the input field
- **Expected Result:** Selected character should appear in input field

#### TC-021: Multiple Character Input via Touchpad
- **Steps:**
  1. Click "අ" button
  2. Click "ය" button
  3. Click "උ" button
- **Expected Result:** "අයු" should appear in input field

#### TC-022: Consonant Selection via Touchpad
- **Steps:**
  1. Click a consonant (e.g., "ක")
  2. Verify it appears in input field
- **Expected Result:** Consonant character should be added to input

#### TC-023: Diacritic Selection
- **Steps:**
  1. Click a diacritic button (e.g., "ා")
  2. Verify it appears in input field
- **Expected Result:** Diacritic mark should be added to input

#### TC-024: Backspace Button (⌫)
- **Steps:**
  1. Enter text via touchpad
  2. Click backspace button
- **Expected Result:** Last character should be removed from input

#### TC-025: Space Button (␣)
- **Steps:**
  1. Enter text via touchpad
  2. Click space button
  3. Enter more text
- **Expected Result:** Space should be inserted between text

---

### 6. File Operations
#### TC-026: Open File
- **Steps:**
  1. Click "Open File" button
  2. Select a text file from system
- **Expected Result:** File content should be loaded into input field

#### TC-027: Open File Auto-Translate
- **Steps:**
  1. Open a Singlish text file
  2. Observe automatic translation to Sinhala
- **Expected Result:** Loaded file content should be automatically translated

---

### 7. UI/UX and Navigation
#### TC-028: Help Button
- **Steps:**
  1. Click "Help" button at top
- **Expected Result:** Help information or guidance should be displayed

#### TC-029: Hide/Show Tools Button
- **Steps:**
  1. Click "Hide Tools" button
- **Expected Result:** Sinhala touchpad and features section should be hidden/collapsed

#### TC-030: Switch Typing Language Dropdown
- **Steps:**
  1. Verify "Switch Typing Language" dropdown is visible
  2. Click dropdown
  3. Verify options are available
- **Expected Result:** Dropdown should show language options

---

### 8. Edge Cases and Validation
#### TC-031: Special Characters Input
- **Steps:**
  1. Enter special characters like @#$%^&*()
  2. Observe translation behavior
- **Expected Result:** Special characters should be handled appropriately

#### TC-032: Numbers Input
- **Steps:**
  1. Enter numbers "123456"
  2. Observe translation
- **Expected Result:** Numbers should be handled (either passed through or translated)

#### TC-033: Very Long Text Input
- **Steps:**
  1. Enter a paragraph of Singlish text
  2. Observe translation performance
- **Expected Result:** Translation should handle long text appropriately

#### TC-034: Mixed Singlish and Sinhala Input
- **Steps:**
  1. Enter mixed text (both Singlish and Sinhala characters)
  2. Observe translation
- **Expected Result:** Application should handle mixed input gracefully

#### TC-035: Consecutive Clear Operations
- **Steps:**
  1. Enter text
  2. Click Clear
  3. Enter different text
  4. Click Clear again
- **Expected Result:** Each clear operation should empty both fields without errors

---

## Test Execution Notes
- **Browser Compatibility:** Test on Chrome, Firefox, Safari, Edge
- **Responsive Design:** Test on mobile, tablet, and desktop viewports
- **Performance:** Monitor translation speed for large text inputs
- **Accessibility:** Verify keyboard navigation and screen reader compatibility

## Priority Levels
- **Critical:** TC-001, TC-002, TC-005, TC-011, TC-013, TC-014, TC-026
- **High:** TC-007, TC-008, TC-009, TC-010, TC-018, TC-020, TC-028
- **Medium:** TC-003, TC-006, TC-012, TC-015, TC-016, TC-019, TC-025
- **Low:** TC-004, TC-017, TC-021, TC-022, TC-023, TC-024, TC-027, TC-030, TC-031-035
