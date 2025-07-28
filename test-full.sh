#!/bin/bash
# Test script for full React app

echo "🔧 Testing full React app..."

# Switch to full app
sed -i '' 's/<MinimalApp \/>/<BrowserRouter><App \/><\/BrowserRouter>/g' src/main.tsx

echo "✅ Switched to full App"
echo "🌐 Start dev server with: npm run dev"
echo "📝 Should show: Complete portfolio website"