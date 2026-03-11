@echo off
echo Starting installation...
npm install lucide-react framer-motion axios react-router-dom tailwind-merge clsx --legacy-peer-deps
if %ERRORLEVEL% NEQ 0 (
  echo npm install failed with %ERRORLEVEL%
) else (
  echo Installation successful.
)
dir node_modules\lucide-react
