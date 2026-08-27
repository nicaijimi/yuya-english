#!/bin/bash
cd "$(dirname "$0")" || exit 1
PORT=8765
URL="http://localhost:$PORT"
PYTHON=""
if command -v python3 >/dev/null 2>&1; then
  PYTHON="python3"
elif command -v python >/dev/null 2>&1; then
  PYTHON="python"
else
  echo "没有找到 Python。请先到 https://www.python.org/downloads/ 安装。"
  read -r -p "按回车键退出" ANSWER
  exit 1
fi
echo "正在启动「语芽」，浏览器会自动打开：$URL"
"$PYTHON" -m http.server "$PORT" &
SERVER_PID=$!
sleep 1
open "$URL"
echo ""
echo "已启动。看完请回到这个窗口，按 Ctrl+C 停止。"
wait "$SERVER_PID"
