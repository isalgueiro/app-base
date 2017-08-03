ng new app-base -dir client -is -p rh -st

ng g m core/layout --routing
ng g c core/layout/shell --export --flat -it 
ng g c core/layout/top-bar
ng g c core/layout/main-content
ng g c core/layout/main-nav

ng g m routes/home --routing
ng g c routes/home/home 

ng g m routes/login --routing
ng g c routes/login/login 

ng g m routes/me --routing
ng g c routes/me/me 

