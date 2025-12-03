# ATS-Optimized CV Template

I have created a professional, ATS-friendly CV template for you.

## Files Created
- `index.html`: The content structure using semantic HTML5.
- `style.css`: The styling for a premium, clean look that remains parser-friendly.

## Key Features for ATS Optimization
1.  **Semantic Structure**: 
    - Used `<h1>` for your name and `<h2>` for section headers (Experience, Education, etc.).
    - Used `<ul>` for lists of skills and job descriptions.
    - This hierarchy helps ATS algorithms understand the content sections.

2.  **Clean Layout**: 
    - Avoided complex multi-column layouts or text boxes which can confuse parsers.
    - The design is visually structured but reads linearly in the code.

3.  **Standard Typography**: 
    - Used 'Inter', a clean modern font, with standard fallbacks (Arial, Helvetica) to ensure text is readable by OCR if necessary.

4.  **No Tables**: 
    - Used CSS Flexbox for layout instead of HTML tables, which are often misread by older ATS.

## How to Use
1.  **Edit Content**: Open `index.html` and replace the placeholder text with your own details.
2.  **Generate PDF**:
    -   **Option A (Browser)**: Open `index.html` in your browser and choose **Print > Save as PDF**.
    -   **Option B (Script)**: Run `npm run pdf` in your terminal. This uses a script to generate a perfect PDF automatically.
        -   *Note*: Requires Node.js installed. Run `npm install` first if you haven't already.
3.  **Profile Photo**: Replace `profile.png` with your own photo.
