# Image prompts

Prompts for the AI-generated images of the landing. Generate them in this order (highest visual impact first).

**Do NOT generate with AI:** the Colombina logo, real product packaging, or any trademarked product. Those must be the official files provided by Colombina.

After generating each image:

1. Export as `.webp` (quality ~80) at the size listed.
2. Save it in `public/images/` with the file name listed.
3. Set its `src` in `src/data/content.ts` (for example `src: 'images/hero.webp'`).

Shared style block (append to every prompt if your model supports long prompts):

> Bright, fresh, youthful commercial photography. Clean saturated colors dominated by royal blue (#243587), vivid red (#E22411) and white. Soft natural daylight, high detail, appetizing ice cream textures, shallow depth of field. No text, no logos, no watermarks, no brand names.

---

## 1. Hero — `hero.webp` (1200×1400, portrait 6:7)

> Commercial lifestyle photograph of a joyful young Latin American woman in her early twenties with long wavy brown hair, eyes closed, smiling with delight as she holds a waffle cone with a creamy scoop of vanilla ice cream with chocolate chips close to her face. She wears a simple white tank top. Background: clear bright blue sky with a few soft white clouds. Warm sunny daylight, slight backlight in the hair, fresh and happy summer mood. Framed from the waist up, subject centered slightly to the right, with empty sky space on the left. Photorealistic, 85mm lens, shallow depth of field. No text, no logos.

Tip: if the result has a busy background, remove it and keep the subject on a transparent PNG; the page already supplies the blue background.

## 2. Flavor scoops — 4 images, `flavor-chocolate.webp`, `flavor-cookies.webp`, `flavor-strawberry.webp`, `flavor-vanilla.webp` (800×800, square)

Generate them with the same prompt structure so they look like one series:

> Studio product photograph of a single perfectly rounded scoop of **{FLAVOR}** ice cream with visible creamy texture and soft scoop ridges, resting on a clean off-white surface (#FBF8F3), seen from a slight three-quarter angle. Garnish beside it: **{GARNISH}**. Soft diffused studio lighting, gentle shadow underneath, crisp focus, appetizing and glossy. Centered composition with generous empty space around. Photorealistic. No text, no logos, no packaging.

| File | {FLAVOR} | {GARNISH} |
| --- | --- | --- |
| `flavor-chocolate.webp` | rich dark chocolate | a few chunks of broken dark chocolate |
| `flavor-cookies.webp` | vanilla cookies-and-cream with dark chocolate cookie pieces | two generic round chocolate sandwich cookies, one broken |
| `flavor-strawberry.webp` | pink strawberry | two fresh red strawberries, one sliced in half |
| `flavor-vanilla.webp` | creamy vanilla with tiny vanilla bean specks | a vanilla flower and two dark vanilla pods |

## 3. Friends moment — `friends.webp` (1400×1000, landscape 7:5)

> Commercial lifestyle photograph of three happy Latin American friends in their early twenties laughing together outdoors on a sunny day, each holding an ice cream cone (chocolate, strawberry and cookies-and-cream). Left: young man with curly dark hair in a royal blue t-shirt. Center: young woman with long brown hair in a white top, laughing with her head tilted. Right: young man with sunglasses in a red t-shirt. Background: bright blue sky with soft clouds. Candid, energetic, genuine joy, warm daylight. Medium shot, subjects close together filling the frame. Photorealistic, shallow depth of field. No text, no logos.

---

## Optional, later

- **Open Graph image** `og.webp` (1200×630): crop of the hero image with blue background, for link previews.
- **Official product photos**: if Colombina shares real product shots, they replace the flavor scoops in section 2 (preferred by the brand guidelines).
