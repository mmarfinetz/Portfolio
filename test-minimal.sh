#!/bin/bash
# Test script for minimal React app

echo "🔧 Testing minimal React app..."

# Switch to minimal app
sed -i '' 's/<App \/>/<MinimalApp \/>/g' src/main.tsx

echo "✅ Switched to MinimalApp"
echo "🌐 Start dev server with: npm run dev"
echo "📝 Should show: 'Minimal Test App' with console logs"