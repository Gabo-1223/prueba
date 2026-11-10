@echo off
title Iniciando NexusTech ^& Gaming Store...
echo ========================================================
echo   Iniciando NexusTech ^& Gaming Store
echo   Proyecto: Angel Romero (Electiva III)
echo ========================================================
echo.
echo Abriendo servidor en http://localhost:3000...
echo.
set NODE_OPTIONS=--openssl-legacy-provider
call npm.cmd start
pause
