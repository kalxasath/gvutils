@echo off
call "set_env.bat"
.\node_modules\.bin\mocha --reporter spec
