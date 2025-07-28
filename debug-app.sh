#!/bin/bash
# Debug script to isolate App component issues

echo "🔍 Debug App Component Issues"
echo "=============================="

echo "1. Building project..."
npm run build 2>&1 | grep -E "(error|Error|warning|Warning)" || echo "✅ Build successful"

echo ""
echo "2. Checking imports in App.tsx..."
grep -n "^import" src/App.tsx

echo ""
echo "3. Checking for missing files..."
echo "Checking Hero component:"
if [ -f "src/components/Hero.tsx" ]; then echo "✅ Hero.tsx exists"; else echo "❌ Hero.tsx missing"; fi

echo "Checking portfolio data:"
if [ -f "src/data/portfolio.ts" ]; then echo "✅ portfolio.ts exists"; else echo "❌ portfolio.ts missing"; fi

echo "Checking CSS:"
if [ -f "src/styles/globals.css" ]; then echo "✅ globals.css exists"; else echo "❌ globals.css missing"; fi

echo ""
echo "4. Checking personalInfo export..."
grep -n "personalInfo" src/data/portfolio.ts | head -3

echo ""
echo "5. Testing component imports individually..."
echo "Create test component? (y/n)"