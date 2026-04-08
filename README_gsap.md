# 🎬 GSAP Auto Animate - Guia Completo

Sistema automático de animações que adiciona `data-animate` em elementos HTML e cria animações suaves com GSAP e ScrollTrigger.

## 📦 Instalação

### 1. Inclua as bibliotecas GSAP

Adicione estas tags no `<head>` ou antes do `</body>` do seu HTML:

```html
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

<!-- GSAP ScrollTrigger Plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- GSAP Auto Animate Script -->
<script src="gsap-auto-animate.js"></script>
```

### 2. Integração no seu projeto

Para integrar no HTML fornecido (Psicanalise Preta), adicione antes do `</body>`:

```html
<!-- Antes do </body> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="/themes/custom/front_theme/dist/js/gsap-auto-animate.js"></script>
</body>
```

## 🎨 Animações Disponíveis

O script inclui 15 tipos de animações:

| Animação | Descrição | Uso Ideal |
|----------|-----------|-----------|
| `fadeInUp` | Fade com movimento para cima | Títulos, parágrafos |
| `fadeInDown` | Fade com movimento para baixo | Headers, banners |
| `fadeInLeft` | Fade da esquerda | Textos, cards |
| `fadeInRight` | Fade da direita | Imagens, boxes |
| `scaleIn` | Zoom in suave | Ícones, botões |
| `slideInUp` | Desliza de baixo | Cards, containers |
| `rotateIn` | Rotação com fade | Logos, imagens |
| `flipIn` | Efeito flip 3D | Cards especiais |
| `bounceIn` | Entrada com bounce | CTAs, badges |
| `zoomIn` | Zoom com elastic | Destaques |
| `slideInLeft` | Desliza da esquerda | Lista items |
| `slideInRight` | Desliza da direita | Sidebar items |
| `fadeIn` | Fade simples | Backgrounds |
| `blurIn` | Fade com desfoque | Imagens de fundo |
| `skewIn` | Entrada inclinada | Elementos artísticos |

## 🎯 Elementos Animados Automaticamente

### Títulos
- `h1` → fadeInUp, slideInUp, zoomIn
- `h2` → fadeInLeft, fadeInRight, slideInUp
- `h3` → fadeInUp, scaleIn, fadeInLeft
- `h4, h5, h6` → fadeInUp, fadeIn

### Conteúdo
- `p` → fadeInUp, fadeIn, blurIn
- `img` → scaleIn, fadeIn, zoomIn, rotateIn
- `li` → fadeInLeft, slideInLeft, fadeInUp

### Interativos
- `button, a.btn` → scaleIn, bounceIn, fadeInUp
- `input, textarea, select` → fadeInUp, slideInLeft

### Containers
- `.card, [class*="card-"]` → fadeInUp, scaleIn, slideInUp
- `[class*="grid"] > *` → fadeInUp, scaleIn

### Outros
- `svg, i` → scaleIn, rotateIn, bounceIn
- `.badge, .label, .tag` → scaleIn, bounceIn

## ⚙️ Personalização

### Adicionar animação customizada

```javascript
// Adicionar nova animação
window.GSAPAutoAnimate.addCustomAnimation('minhAnimacao', {
    from: { opacity: 0, x: -100, rotation: 45 },
    to: { opacity: 1, x: 0, rotation: 0, ease: 'power4.out' }
});
```

### Usar manualmente no HTML

```html
<!-- Definir animação específica -->
<div data-animate="bounceIn" data-delay="0.3" data-duration="1.2">
    Conteúdo animado
</div>
```

### Atributos disponíveis:
- `data-animate`: nome da animação
- `data-delay`: atraso em segundos (ex: 0.5)
- `data-duration`: duração em segundos (ex: 1.0)

### Atualizar após conteúdo dinâmico

```javascript
// Se adicionar elementos via JavaScript
window.GSAPAutoAnimate.refresh();
```

## 📱 Configuração de ScrollTrigger

As animações são acionadas quando o elemento entra em 85% da viewport:

```javascript
scrollTrigger: {
    trigger: element,
    start: 'top 85%',      // Começa quando topo está a 85% da viewport
    end: 'bottom 20%',     // Termina quando base está a 20%
    toggleActions: 'play none none none'
}
```

### Para debug, descomente os marcadores:

```javascript
// No arquivo gsap-auto-animate.js, linha ~166
scrollTrigger: {
    trigger: element,
    start: 'top 85%',
    markers: true, // ← Descomente esta linha
}
```

## 🎮 Controle de Performance

### Excluir elementos específicos

Adicione a classe `no-animate` ou o atributo `data-no-animate`:

```html
<div class="no-animate">
    Este elemento não será animado
</div>

<img src="..." data-no-animate alt="Sem animação">
```

### Desabilitar para elementos ocultos

O script automaticamente ignora:
- Elementos com classe `hidden`
- Elementos com classe `visually-hidden`
- Elementos que já possuem `data-animate`

## 🔧 Solução de Problemas

### As animações não funcionam

1. Verifique se GSAP está carregado:
```javascript
console.log(typeof gsap); // deve retornar 'object' ou 'function'
```

2. Verifique se ScrollTrigger está carregado:
```javascript
console.log(typeof ScrollTrigger); // deve retornar 'object' ou 'function'
```

3. Verifique o console do navegador para erros

### Animações muito rápidas ou lentas

Ajuste as durações no arquivo `gsap-auto-animate.js`:

```javascript
{ 
    selector: 'h1:not([data-animate])', 
    animations: ['fadeInUp', 'slideInUp', 'zoomIn'],
    duration: 1.5, // ← Aumente ou diminua aqui
    stagger: 0.3   // ← Ajuste delay entre elementos
}
```

## 💡 Exemplos de Uso

### Para o site Psicanalise Preta

```html
<!-- Hero Section -->
<section class="hero">
    <h1>Psicanálise Preta</h1>
    <!-- Será automaticamente: data-animate="fadeInUp" -->
    
    <p>Transformando vidas através da psicanálise</p>
    <!-- Será automaticamente: data-animate="fadeInUp" com delay -->
    
    <a href="/cursos" class="btn">Inscreva-se</a>
    <!-- Será automaticamente: data-animate="scaleIn" ou "bounceIn" -->
</section>

<!-- Cards de Cursos -->
<div class="grid grid-cols-3 gap-6">
    <div class="card">...</div>
    <!-- Cada card receberá: data-animate="fadeInUp" com stagger -->
</div>
```

### Resultado esperado no HTML:

```html
<h1 data-animate="fadeInUp" data-delay="0" data-duration="1">
    Psicanálise Preta
</h1>

<p data-animate="blurIn" data-delay="0.1" data-duration="0.8">
    Transformando vidas através da psicanálise
</p>

<a href="/cursos" class="btn" data-animate="bounceIn" data-delay="0.2" data-duration="0.6">
    Inscreva-se
</a>
```

## 📊 Estatísticas

Após carregar a página, o console mostrará:
```
✨ 145 elementos animados com GSAP!
```

## 🚀 Dicas de Performance

1. **Use loading lazy em imagens**: `<img loading="lazy">`
2. **Limite animações em mobile**: Adicione verificação de largura de tela
3. **Prefira `will-change` para animações complexas**
4. **Use `clearProps: 'all'` para limpar estilos após animação**

## 📝 Licença

Este script é fornecido como está. Livre para uso e modificação.

## 🤝 Contribuindo

Para adicionar mais animações ou melhorar o script, edite o objeto `animations` no arquivo `gsap-auto-animate.js`.

---

**Desenvolvido com ❤️ usando GSAP 3.12.5**