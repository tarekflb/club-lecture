import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const supabaseAdmin = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_SERVICE_KEY
)
```

**`src/App.jsx`** → colle ici le code React du formulaire qu'on a fait

---

**Étape 2 — Connecter à Vercel**

1. Va sur **vercel.com** → connecte-toi avec ton compte GitHub
2. Clique **"Add New Project"**
3. Sélectionne ton repo `club-lecture`
4. Vercel détecte automatiquement que c'est un projet Vite ✅

---

**Étape 3 — Ajouter les variables d'environnement dans Vercel**

Avant de déployer, dans Vercel tu verras une section **"Environment Variables"** — ajoute ces 3 variables :

| Nom | Valeur |
|---|---|
| `VITE_SUPABASE_URL` | `https://xxxxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | ta clé `anon` de Supabase |
| `VITE_SUPABASE_SERVICE_KEY` | ta clé `service_role` de Supabase |

---

**Étape 4 — Deploy**

Clique **"Deploy"** → Vercel installe automatiquement les npm, build, et te génère un lien du type :
```
https://club-lecture-xyz.vercel.app
