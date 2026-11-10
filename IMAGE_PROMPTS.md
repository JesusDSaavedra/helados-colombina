# Guía para generar las imágenes

Esta guía explica, paso a paso, cómo generar las imágenes de la landing. Las instrucciones están en español y los prompts en inglés, porque los generadores de imagen suelen dar mejores resultados en inglés.

**Tú solo tienes que generar y descargar.** Deja los archivos en la carpeta `imagenes-entrantes/` (en la raíz del proyecto) y avísame: yo los renombro, los optimizo y los coloco en la página.

> ⚠️ **No generes con IA:** el logo de Colombina, empaques reales ni productos de marca. Esos deben ser los archivos oficiales que entregue Colombina.

---

## Cómo funciona

Hay **3 imágenes principales** y una de ellas (los sabores) es una **serie de 4**:

| # | Imagen | Formato | Nombre al descargar |
| --- | --- | --- | --- |
| 1 | Hero: chica con helado | Vertical **6:7** (o 4:5 si no existe 6:7) | `1-hero` |
| 2 | Sabores: 4 bolas de helado | Cuadrado **1:1** | `2-chocolate`, `2-galleta`, `2-fresa`, `2-vainilla` |
| 3 | Grupo de amigos | Horizontal **7:5** (o 4:3 si no existe 7:5) | `3-amigos` |

Cada prompt ya trae incluido el **bloque de estilo base** (colores de marca, luz, estética). Así todas las imágenes se ven como parte de la misma campaña y solo tienes que copiar y pegar.

---

## Paso a paso general

1. Abre tu generador de imágenes (ChatGPT, Gemini, Midjourney, Firefly, etc.).
2. Si el generador tiene opción de **relación de aspecto**, configúrala según la tabla de arriba antes de pegar el prompt.
3. Copia el prompt completo del bloque gris (todo, de principio a fin) y pégalo.
4. Revisa el resultado con la **lista de control** de cada imagen. Si algo falla, usa el "prompt de ajuste" sugerido en el mismo chat.
5. Descarga la imagen en la **máxima calidad** disponible (PNG o JPG).
6. Renómbrala como dice la tabla (si se te olvida, no pasa nada: dime cuál es cuál).
7. Muévela a la carpeta `imagenes-entrantes/`.

---

## Imagen 1 — Hero (empieza por esta)

Es la primera imagen que ve el visitante, por eso es la más importante.

**Configuración:** relación de aspecto vertical 6:7 (o 4:5).

**Prompt (cópialo completo):**

```text
Commercial lifestyle photograph of a joyful young Latin American woman in her early twenties with long wavy brown hair, eyes closed, smiling with delight as she holds a waffle cone with a creamy scoop of vanilla ice cream with chocolate chips close to her face. She wears a simple white tank top. Background: clear bright royal blue sky with a few soft white clouds. Warm sunny daylight, slight backlight in her hair, fresh and happy summer mood. Framed from the waist up, subject slightly to the right, with empty sky space on the left. Bright, fresh, youthful commercial photography, clean saturated colors dominated by royal blue (#243587), vivid red (#E22411) and white. Photorealistic, 85mm lens, shallow depth of field, high detail, appetizing ice cream texture. No text, no logos, no watermarks, no brand names.
```

**Lista de control:**
- [ ] Las manos y los dedos se ven naturales (es el error más común de la IA).
- [ ] El cono tiene textura de galleta y el helado se ve cremoso.
- [ ] No hay textos ni logos inventados.
- [ ] El fondo es azul cielo, sin edificios ni objetos que distraigan.

**Prompts de ajuste** (pégalos en el mismo chat si hace falta):
- Manos raras: `Same image, but fix the hands: natural relaxed fingers holding the cone.`
- Fondo muy oscuro: `Same image, brighter and more saturated blue sky, more sunlight.`

---

## Imagen 2 — Serie de 4 sabores

Aquí aplica la idea de **prompt base**: generas el primer sabor y, en el **mismo chat**, pides los demás cambiando solo el sabor. Así las 4 imágenes quedan con la misma luz, el mismo ángulo y el mismo fondo.

**Configuración:** relación de aspecto cuadrada 1:1.

### Paso 2.1 — Primer sabor (chocolate): prompt base

```text
Studio product photograph of a single perfectly rounded scoop of rich dark chocolate ice cream with visible creamy texture and soft scoop ridges, resting on a clean off-white surface (#FBF8F3), seen from a slight three-quarter angle. Garnish beside it: a few chunks of broken dark chocolate. Soft diffused studio lighting, gentle shadow underneath, crisp focus, appetizing and glossy. Centered composition with generous empty space around the scoop. Bright, fresh commercial food photography. Photorealistic, high detail. No text, no logos, no packaging, no brand names.
```

Revisa que te guste el resultado **antes de seguir**. Esta imagen será la referencia de las otras tres.

### Paso 2.2 — Los otros tres sabores (en el mismo chat)

Pega estos prompts **uno por uno**, esperando cada resultado:

**Galleta y crema:**

```text
Now create the exact same photo, keeping the same angle, lighting, background, scoop size and composition, but change the flavor to vanilla cookies-and-cream ice cream with dark chocolate cookie pieces. Garnish beside it: two generic round chocolate sandwich cookies, one broken in half. No brand names, no logos.
```

**Fresa:**

```text
Now create the exact same photo, keeping the same angle, lighting, background, scoop size and composition, but change the flavor to pink strawberry ice cream. Garnish beside it: two fresh red strawberries, one sliced in half. No text, no logos.
```

**Vainilla:**

```text
Now create the exact same photo, keeping the same angle, lighting, background, scoop size and composition, but change the flavor to creamy vanilla ice cream with tiny vanilla bean specks. Garnish beside it: a white vanilla flower and two dark vanilla pods. No text, no logos.
```

> 💡 Si tu generador **no recuerda** la imagen anterior (por ejemplo, abriste otro chat), sube la imagen del chocolate como referencia y escribe antes del prompt: `Use this image as the style reference.`

**Lista de control (las 4 juntas):**
- [ ] Todas tienen el mismo fondo claro y el mismo ángulo.
- [ ] La bola de helado tiene un tamaño parecido en las 4.
- [ ] Las galletas no tienen marca ni letras visibles.

---

## Imagen 3 — Grupo de amigos

**Configuración:** relación de aspecto horizontal 7:5 (o 4:3).

**Prompt (cópialo completo):**

```text
Commercial lifestyle photograph of three happy Latin American friends in their early twenties laughing together outdoors on a sunny day, each holding an ice cream cone (chocolate, strawberry and cookies-and-cream). Left: young man with curly dark hair in a royal blue t-shirt. Center: young woman with long brown hair in a white top, laughing with her head tilted. Right: young man with sunglasses in a red t-shirt. Background: bright blue sky with soft white clouds. Candid, energetic, genuine joy, warm daylight. Medium shot, subjects close together filling the frame. Bright, fresh, youthful commercial photography, clean saturated colors dominated by royal blue (#243587), vivid red (#E22411) and white. Photorealistic, shallow depth of field, high detail. No text, no logos, no watermarks, no brand names.
```

**Lista de control:**
- [ ] Hay exactamente 3 personas y cada una tiene un solo cono.
- [ ] Las caras y las manos se ven naturales.
- [ ] Las camisetas son azul, blanca y roja (refuerzan los colores de marca).

**Prompt de ajuste:**
- Rostros deformes: `Same image, but make all three faces natural and realistic, with genuine smiles.`

---

## Cuando termines

1. Verifica que en `imagenes-entrantes/` estén los 6 archivos: `1-hero`, `2-chocolate`, `2-galleta`, `2-fresa`, `2-vainilla`, `3-amigos`.
2. Avísame. Yo me encargo de:
   - convertirlas a `.webp` y ajustar su tamaño para que la página cargue rápido;
   - moverlas a `public/images/` con su nombre final;
   - conectarlas en `src/data/content.ts`;
   - revisar cómo se ven en la página y ajustar recortes si hace falta.

No hace falta que sean todas a la vez: si me pasas primero la del hero, la coloco y seguimos.

---

## Opcional, más adelante

- **Imagen para compartir en redes (Open Graph)**: la saco yo recortando el hero, no hace falta generarla.
- **Fotos oficiales de producto**: si Colombina entrega fotos reales, reemplazan a los sabores generados (es lo que recomiendan los lineamientos de marca).
