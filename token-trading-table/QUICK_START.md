# Quick Start Guide

## ⚡ 30-Second Setup

```bash
cd token-trading-table
npm install
npm run dev
```

The app opens at **http://localhost:3000** automatically.

---

## 🎯 What to Test

### Try These Features:

1. **Sorting**
   - Click "Price" header → sorts by price
   - Click again → reverses sort order
   - Click "Market Cap" → re-sorts

2. **Search**
   - Type "BTC" → shows Bitcoin only
   - Type "eth" → shows Ethereum only
   - Type "xyz" → shows "No tokens found"

3. **Visual Feedback**
   - Green = price went up ✓
   - Red = price went down
   - Charts show 7-day trends

4. **Responsive**
   - Resize browser window
   - Notice table adapts automatically
   - Mobile view scrolls horizontally

---

## 📊 Data at a Glance

| Token | Price | 24h Change | Status |
|-------|-------|-----------|--------|
| BTC | $42,500 | +2.5% | ✅ |
| ETH | $2,250 | +1.8% | ✅ |
| BNB | $612 | +0.95% | ✅ |
| XRP | $2.85 | +3.2% | ✅ |
| ADA | $1.05 | -0.5% | ✅ |
| SOL | $198 | +5.2% | ✅ |
| DOGE | $0.42 | +2.1% | ✅ |
| USDT | $1.00 | +0.1% | ✅ |

---

## 🔧 Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install

# Update dependencies
npm update
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `App.jsx` | Main logic & state |
| `TokenTable.jsx` | Table display |
| `TokenRow.jsx` | Each row in table |
| `SearchBar.jsx` | Search input |
| `MiniChart.jsx` | Price charts |
| `App.css` | Main styling |
| `vite.config.js` | Build config |

---

## 🎨 Customization Tips

### Change Mock Data
Edit `App.jsx` → `mockTokens` array

### Change Colors
Edit `App.css` → Gradient colors
Edit `TokenRow.css` → Green/red values

### Change Default Sort
Edit `App.jsx` → `setSortConfig` initial state

### Add More Tokens
Add objects to `mockTokens` array in `App.jsx`

---

## 🚀 Production Deployment

```bash
# Build optimized version
npm run build

# Contents in ./dist/ folder
# Deploy to hosting service
```

---

## ❓ Common Questions

**Q: How do I add real data?**
A: Replace `mockTokens` with API calls in `App.jsx`

**Q: Can I change the layout?**
A: Yes! Modify CSS files in `src/` folder

**Q: How do I add more features?**
A: Create new components in `src/components/`

**Q: Is it mobile-friendly?**
A: Yes! Fully responsive desktop to mobile

---

## 📞 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- --port 3001` |
| Styles not loading | Hard refresh (Ctrl+Shift+R) |
| Components missing | Run `npm install` again |
| Slow loading | Clear browser cache |

---

## 📋 Features Checklist

- ✅ Token table with 8 cryptocurrencies
- ✅ Click columns to sort
- ✅ Search by symbol or name
- ✅ Price formatting (2-6 decimals)
- ✅ 24h change with color coding
- ✅ Volume & market cap display
- ✅ Supply information
- ✅ 7-day sparkline charts
- ✅ Responsive design
- ✅ Professional styling

---

## 🎯 Next Steps

1. ✅ Run the app with `npm run dev`
2. ✅ Test sorting on each column
3. ✅ Try searching for tokens
4. ✅ View on mobile (resize browser)
5. ✅ Build with `npm run build`
6. ✅ Deploy to hosting

---

**Everything is ready to use! Start with `npm run dev`** 🚀
