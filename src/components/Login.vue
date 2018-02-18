<template>
    <div class="container">
        <div class="majtas">
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MTAuMTU1IDQxMC4xNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxMC4xNTUgNDEwLjE1NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM3NkE5RUE7IiBkPSJNNDAzLjYzMiw3NC4xOGMtOS4xMTMsNC4wNDEtMTguNTczLDcuMjI5LTI4LjI4LDkuNTM3YzEwLjY5Ni0xMC4xNjQsMTguNzM4LTIyLjg3NywyMy4yNzUtMzcuMDY3ICBsMCwwYzEuMjk1LTQuMDUxLTMuMTA1LTcuNTU0LTYuNzYzLTUuMzg1bDAsMGMtMTMuNTA0LDguMDEtMjguMDUsMTQuMDE5LTQzLjIzNSwxNy44NjJjLTAuODgxLDAuMjIzLTEuNzksMC4zMzYtMi43MDIsMC4zMzYgIGMtMi43NjYsMC01LjQ1NS0xLjAyNy03LjU3LTIuODkxYy0xNi4xNTYtMTQuMjM5LTM2LjkzNS0yMi4wODEtNTguNTA4LTIyLjA4MWMtOS4zMzUsMC0xOC43NiwxLjQ1NS0yOC4wMTQsNC4zMjUgIGMtMjguNjcyLDguODkzLTUwLjc5NSwzMi41NDQtNTcuNzM2LDYxLjcyNGMtMi42MDQsMTAuOTQ1LTMuMzA5LDIxLjktMi4wOTcsMzIuNTZjMC4xMzksMS4yMjUtMC40NCwyLjA4LTAuNzk3LDIuNDgxICBjLTAuNjI3LDAuNzAzLTEuNTE2LDEuMTA2LTIuNDM5LDEuMTA2Yy0wLjEwMywwLTAuMjA5LTAuMDA1LTAuMzE0LTAuMDE1Yy02Mi43NjItNS44MzEtMTE5LjM1OC0zNi4wNjgtMTU5LjM2My04NS4xNGwwLDAgIGMtMi4wNC0yLjUwMy01Ljk1Mi0yLjE5Ni03LjU3OCwwLjU5M2wwLDBDMTMuNjc3LDY1LjU2NSw5LjUzNyw4MC45MzcsOS41MzcsOTYuNTc5YzAsMjMuOTcyLDkuNjMxLDQ2LjU2MywyNi4zNiw2My4wMzIgIGMtNy4wMzUtMS42NjgtMTMuODQ0LTQuMjk1LTIwLjE2OS03LjgwOGwwLDBjLTMuMDYtMS43LTYuODI1LDAuNDg1LTYuODY4LDMuOTg1bDAsMGMtMC40MzgsMzUuNjEyLDIwLjQxMiw2Ny4zLDUxLjY0Niw4MS41NjkgIGMtMC42MjksMC4wMTUtMS4yNTgsMC4wMjItMS44ODgsMC4wMjJjLTQuOTUxLDAtOS45NjQtMC40NzgtMTQuODk4LTEuNDIxbDAsMGMtMy40NDYtMC42NTgtNi4zNDEsMi42MTEtNS4yNzEsNS45NTJsMCwwICBjMTAuMTM4LDMxLjY1MSwzNy4zOSw1NC45ODEsNzAuMDAyLDYwLjI3OGMtMjcuMDY2LDE4LjE2OS01OC41ODUsMjcuNzUzLTkxLjM5LDI3Ljc1M2wtMTAuMjI3LTAuMDA2ICBjLTMuMTUxLDAtNS44MTYsMi4wNTQtNi42MTksNS4xMDZjLTAuNzkxLDMuMDA2LDAuNjY2LDYuMTc3LDMuMzUzLDcuNzRjMzYuOTY2LDIxLjUxMyw3OS4xMzEsMzIuODgzLDEyMS45NTUsMzIuODgzICBjMzcuNDg1LDAsNzIuNTQ5LTcuNDM5LDEwNC4yMTktMjIuMTA5YzI5LjAzMy0xMy40NDksNTQuNjg5LTMyLjY3NCw3Ni4yNTUtNTcuMTQxYzIwLjA5LTIyLjc5MiwzNS44LTQ5LjEwMyw0Ni42OTItNzguMjAxICBjMTAuMzgzLTI3LjczNywxNS44NzEtNTcuMzMzLDE1Ljg3MS04NS41ODl2LTEuMzQ2Yy0wLjAwMS00LjUzNywyLjA1MS04LjgwNiw1LjYzMS0xMS43MTJjMTMuNTg1LTExLjAzLDI1LjQxNS0yNC4wMTQsMzUuMTYtMzguNTkxICBsMCwwQzQxMS45MjQsNzcuMTI2LDQwNy44NjYsNzIuMzAyLDQwMy42MzIsNzQuMThMNDAzLjYzMiw3NC4xOHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" alt="">
            <!--background:url(        no-repeat-->
            <!--majtas center-->
            <!--<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojNTBBQkYxOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik02MC4zNzcsMzM3LjgyMmMzMC4zMywxOS4yMzYsNjYuMzA4LDMwLjM2OCwxMDQuODc1LDMwLjM2OGMxMDguMzQ5LDAsMTk2LjE4LTg3Ljg0MSwxOTYuMTgtMTk2LjE4ICAgYzAtMi43MDUtMC4wNTctNS4zOS0wLjE2MS04LjA2N2MzLjkxOS0zLjA4NCwyOC4xNTctMjIuNTExLDM0LjA5OC0zNWMwLDAtMTkuNjgzLDguMTgtMzguOTQ3LDEwLjEwNyAgIGMtMC4wMzgsMC0wLjA4NSwwLjAwOS0wLjEyMywwLjAwOWMwLDAsMC4wMzgtMC4wMTksMC4xMDQtMC4wNjZjMS43NzUtMS4xODYsMjYuNTkxLTE4LjA3OSwyOS45NTEtMzguMjA3ICAgYzAsMC0xMy45MjIsNy40MzEtMzMuNDE1LDEzLjkzMmMtMy4yMjcsMS4wNzItNi42MDUsMi4xMjYtMTAuMDg4LDMuMTAzYy0xMi41NjUtMTMuNDEtMzAuNDI1LTIxLjc4LTUwLjI1LTIxLjc4ICAgYy0zOC4wMjcsMC02OC44NDEsMzAuODA1LTY4Ljg0MSw2OC44MDNjMCw1LjM2MiwwLjYxNywxMC41ODEsMS43ODQsMTUuNTkyYy01LjMxNC0wLjIxOC04Ni4yMzctNC43NTUtMTQxLjI4OS03MS40MjMgICBjMCwwLTMyLjkwMiw0NC45MTcsMTkuNjA3LDkxLjEwNWMwLDAtMTUuOTYyLTAuNjM2LTI5LjczMy04Ljg2NGMwLDAtNS4wNTgsNTQuNDE2LDU0LjQwNyw2OC4zMjljMCwwLTExLjcwMSw0LjQzMi0zMC4zNjgsMS4yNzIgICBjMCwwLDEwLjQzOSw0My45NjgsNjMuMjcxLDQ4LjA3N2MwLDAtNDEuNzc3LDM3Ljc0LTEwMS4wODEsMjguODg1TDYwLjM3NywzMzcuODIyeiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="">-->
        </div>
        <div class="djatht">
            <div  class="loginContainer">
                <div style="display:flex; justify-content: center;">
                    <img style="max-width: 50px; max-height: 50px;" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MTAuMTU1IDQxMC4xNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxMC4xNTUgNDEwLjE1NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM3NkE5RUE7IiBkPSJNNDAzLjYzMiw3NC4xOGMtOS4xMTMsNC4wNDEtMTguNTczLDcuMjI5LTI4LjI4LDkuNTM3YzEwLjY5Ni0xMC4xNjQsMTguNzM4LTIyLjg3NywyMy4yNzUtMzcuMDY3ICBsMCwwYzEuMjk1LTQuMDUxLTMuMTA1LTcuNTU0LTYuNzYzLTUuMzg1bDAsMGMtMTMuNTA0LDguMDEtMjguMDUsMTQuMDE5LTQzLjIzNSwxNy44NjJjLTAuODgxLDAuMjIzLTEuNzksMC4zMzYtMi43MDIsMC4zMzYgIGMtMi43NjYsMC01LjQ1NS0xLjAyNy03LjU3LTIuODkxYy0xNi4xNTYtMTQuMjM5LTM2LjkzNS0yMi4wODEtNTguNTA4LTIyLjA4MWMtOS4zMzUsMC0xOC43NiwxLjQ1NS0yOC4wMTQsNC4zMjUgIGMtMjguNjcyLDguODkzLTUwLjc5NSwzMi41NDQtNTcuNzM2LDYxLjcyNGMtMi42MDQsMTAuOTQ1LTMuMzA5LDIxLjktMi4wOTcsMzIuNTZjMC4xMzksMS4yMjUtMC40NCwyLjA4LTAuNzk3LDIuNDgxICBjLTAuNjI3LDAuNzAzLTEuNTE2LDEuMTA2LTIuNDM5LDEuMTA2Yy0wLjEwMywwLTAuMjA5LTAuMDA1LTAuMzE0LTAuMDE1Yy02Mi43NjItNS44MzEtMTE5LjM1OC0zNi4wNjgtMTU5LjM2My04NS4xNGwwLDAgIGMtMi4wNC0yLjUwMy01Ljk1Mi0yLjE5Ni03LjU3OCwwLjU5M2wwLDBDMTMuNjc3LDY1LjU2NSw5LjUzNyw4MC45MzcsOS41MzcsOTYuNTc5YzAsMjMuOTcyLDkuNjMxLDQ2LjU2MywyNi4zNiw2My4wMzIgIGMtNy4wMzUtMS42NjgtMTMuODQ0LTQuMjk1LTIwLjE2OS03LjgwOGwwLDBjLTMuMDYtMS43LTYuODI1LDAuNDg1LTYuODY4LDMuOTg1bDAsMGMtMC40MzgsMzUuNjEyLDIwLjQxMiw2Ny4zLDUxLjY0Niw4MS41NjkgIGMtMC42MjksMC4wMTUtMS4yNTgsMC4wMjItMS44ODgsMC4wMjJjLTQuOTUxLDAtOS45NjQtMC40NzgtMTQuODk4LTEuNDIxbDAsMGMtMy40NDYtMC42NTgtNi4zNDEsMi42MTEtNS4yNzEsNS45NTJsMCwwICBjMTAuMTM4LDMxLjY1MSwzNy4zOSw1NC45ODEsNzAuMDAyLDYwLjI3OGMtMjcuMDY2LDE4LjE2OS01OC41ODUsMjcuNzUzLTkxLjM5LDI3Ljc1M2wtMTAuMjI3LTAuMDA2ICBjLTMuMTUxLDAtNS44MTYsMi4wNTQtNi42MTksNS4xMDZjLTAuNzkxLDMuMDA2LDAuNjY2LDYuMTc3LDMuMzUzLDcuNzRjMzYuOTY2LDIxLjUxMyw3OS4xMzEsMzIuODgzLDEyMS45NTUsMzIuODgzICBjMzcuNDg1LDAsNzIuNTQ5LTcuNDM5LDEwNC4yMTktMjIuMTA5YzI5LjAzMy0xMy40NDksNTQuNjg5LTMyLjY3NCw3Ni4yNTUtNTcuMTQxYzIwLjA5LTIyLjc5MiwzNS44LTQ5LjEwMyw0Ni42OTItNzguMjAxICBjMTAuMzgzLTI3LjczNywxNS44NzEtNTcuMzMzLDE1Ljg3MS04NS41ODl2LTEuMzQ2Yy0wLjAwMS00LjUzNywyLjA1MS04LjgwNiw1LjYzMS0xMS43MTJjMTMuNTg1LTExLjAzLDI1LjQxNS0yNC4wMTQsMzUuMTYtMzguNTkxICBsMCwwQzQxMS45MjQsNzcuMTI2LDQwNy44NjYsNzIuMzAyLDQwMy42MzIsNzQuMThMNDAzLjYzMiw3NC4xOHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                    <!--<img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEGUlEQVRoQ+1aSWgUaRT+auklXd2JScwiY4zGMY7EjMYFxH0hiIgyCOpFRg86KGEuAzou6MWTigt6EPTgXERwQUSJUTFeXKIQRSZmnAxJxiXudtJbqreqkr9iS5ZufVXdQRrqXfrytu/7/r/+96C5Dac6nb3uvP0ah18B5CEbTEWA4/BXQMrfyq055z2qcfg9G/oe3COn4Ri3+ry3J2uYH8qyjwHQspH9RM8WgO+tnqWApUCaDFhHKE0C0w63FKBSWOTisaLSiWmlNox08YgqGtq7FdzsjODOiyj6v6YTCkR09MShqN/OTlZglJvHlBIbGtoj3846yGPWD3bUzXTBIXBJYx+/jeF0i4yJhSLmltnhlVUcvh8i1SEDWFuVg1U/OXHiYa/OGtUmjRSxZ74HKXofkuZdSMWuW36EYhrimVRgxxw3akptesELT8M42ypDI0xRB2tzUZYrkPAGIhoa2sModQto88ZxjaA2WYHd89yoLu4DwOzJ+ziON4fAGEtl40YI2Lckl9R8f6cbHRGcfNRLiiMD2FTjQm2FY0DSmKKhvj2Cy21h+CND5VhQbkfdDInUCHNiGc7/E8a5VpkcQwZQXSxi9zxP0sQxFXjQFcXdl1G0vItDjveBWTTWgS3TXeRmGAkbr7D1hG5kACxl/3uQqoSqAa8CCl4FVdh4fLk3lJY+yiq21Psorl98yADY9/uFX8EfsySMzxcNFaE6/9+jYNtNP9Vd9yMD2DW37xJ3h1UU5vCGilCdm7qiONRE+/4ncpIBrKx0Yl11DrUXU36n/5ZxqS1sKJYMQLJzOLo0Dx578tfUUNUUzjsa/fp4YcTIAFjSqSU2/DnbDWEYTtD7XhV1V41dYEN3IMEKGw02T5fAZqNM2pknMi4+NXZ8TAGoLBT15ueU2XVFMmFyTENdgw/BKGE2GVTQ0BFisWxi3Lsw+YNmFsyZFhkX/zXOvikFWND6KS4s/3HgWGG2+Wc+Bdsb/aTZP1kNwwroqAGsqcrBLxOd5DE5WXE2cuxsDKArYOzL0z+XKQCJBKVuHgvKHagsEAZMqhQ12Kx/4F4Qj97EKO4pfdICwLJW5Av4rUbSf6kWUTQcuR9C8+v0mjd9B9hq+HOJiMVjHZg2yqYfKaqx/eFgUxCdPeaPjeEjVFUkYmG5A+w1Zsv5aI9g+DFjC/r1jgjY9z78edymgv6aH/kIFUs8lk9wYv4YOyQbnXO2295+HsXl/8Jf3d7MgiEDSBQQeWBykQ2Ti0WMGyGCXeRcOweB53Rm2WP0OqjguV/Rl5vWD3GwzW24zDCA4WrEbF4LgFnmMhVnKZApJs3msRQwy1ym4iwFMsWk2Tzc6rNeP3hkdsUy243xOF+W/9lDO8Itq9ccnlD3gaz6uw3g4zTtVEAq2P4J6u69El0og+8AAAAASUVORK5CYII=" alt="" />-->
                </div>
                <div class="inputs">
                    <!--<div class="inputs">-->
                    <!--<div class="emri">-->
                    <p class="teksti">See what is happening in world right now.</p>
                    <p class="teksti">Log in Twitter.</p>
                    <input class="userInputs" type="text" placeholder="Email">
                    <!--</div>-->
                    <!--<div class="emri"> -->
                    <input class="userInputs" type="text" placeholder="Password">
                    <div class="loginButton">
                        <button class="LoginButton" v-on:click="login()">Login</button>
                        <h6>Don't have an account yet? <a href="#">Sign Up</a></h6>
                    </div>
                    <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        methods:{
            login(){
                this.$router.push('/')
            }
        }
    }
</script>
<style scoped>
    body{
        padding:0;
        margin:0;
        font-family:Arial;
    }
    .container{
        display:flex;
    }
    .majtas{
        display: flex;
        justify-content: center;
        height:100vh;
        width:50vw;
    }
    .djatht{
        display: flex;
        justify-content: center;
        height:100vh;
        width:50vw;
        background-color:white;
    }
    .button{
        /*margin:5%;*/
        display:flex;
        /*justify-content:space-around*/
    }
    .LoginButton{
        margin-top:3%;
        width:30%;
        height:40px;
        background-color:#1da1f2;
        border:1px solid #1da1f2;
        border-radius:20px;
        font-size: 20px;
        padding:0;
    }
    .loginContainer{
        height: 87vh;
        display:flex;
        flex-direction:column;
        justify-content:space-around;

    }
    .teksti{
        font-size:27px;
    }
    input:focus{
        outline: none;
    }
    .userInputs{
        outline: hidden;
        margin:2% 0;
        padding:0 2%;
        height:49px;
        font-size: 20px;
        border-radius:10px;
        border:0.5px solid #1da1f2;
    }
    .inputs{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
    }
    button:active{
        outline: none;
    }
    .loginButton{
        display: flex;
        justify-content: space-between;
    }
</style>