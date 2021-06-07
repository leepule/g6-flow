<template>
  <div id="box">
    <ul id="toolbar" ref="toolbar" class="toolbar">
      <li title="保存" @click="save">
        <svg t="1622170234623" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2380" width="20" height="24">
          <path d="M812.64864834 962H211.4459457C129.06756758 962 62 894.32432422 62 811.05405401V212.95945918C62 129.79729708 129.01351309 62 211.40540528 62h601.24324306C895.08108096 62 962.05405449 129.74324346 962.05405449 212.95945918V811.05405401c-0.0540545 83.27027021-67.02702714 150.94594599-149.40540615 150.94594599zM211.4459457 120.91891924c-50.21621631 0-91.13513555 41.28378398-91.13513466 92.09459443V811.05405401c0 50.75675683 40.91891924 92.09459443 91.13513466 92.09459443h601.20270264c50.28378398 0 91.20270234-41.40540527 91.20270322-92.09459443V212.95945918c0-50.75675683-40.91891924-92.04054082-91.20270322-92.04053994z m588.72973008 392.51351337H223.93243232V62h576.29729708v451.43243261z m-517.90540518-58.91891923h459.70270226V120.91891924H282.2702706z m315.58108096-246.95945947h58.20270294v196.32432481h-58.20270294z" fill="" p-id="2381"></path>
        </svg>
      </li>
      <li title="上传数据" @click="readUploadData">
        <svg t="1622170635577" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3244" width="20" height="24">
          <path d="M516.281414 464.804704l157.339548 157.340764-31.693413 31.692197-125.646135-125.646134-125.64735 125.646134-31.693414-31.692197z" p-id="3245"></path>
          <path d="M493.870886 512.858716h44.821057v228.238311h-44.821057z" p-id="3246"></path>
          <path d="M615.000858 816.6348h-0.008515c-42.072195 0-76.299184-34.228206-76.299184-76.3004l0.002433-0.109468H493.873318l-0.001216 0.109468c0 66.893452 54.228006 121.121458 121.121458 121.121458h0.008514v-44.821058z" p-id="3247"></path>
          <path d="M802.858863 498.506247a292.347627 292.347627 0 0 0 3.606362-45.781943c0-160.264776-129.920251-290.18381-290.183811-290.183811-156.325145 0-283.755607 123.617328-289.927168 278.428166-98.420231 18.360213-172.926572 104.690313-172.926573 208.435553 0 117.112497 94.937933 212.051646 212.051646 212.051646l0.254209-0.002433v0.002433h105.390909v-44.821058H265.756638v-0.003649c-0.09244 0-0.184879 0.003649-0.278535 0.003649-44.669019 0-86.664586-17.394462-118.249748-48.98084-31.585162-31.585162-48.980841-73.580729-48.98084-118.249748s17.394462-86.664586 48.98084-118.249748c22.566216-22.566216 50.447712-37.88322 80.820212-44.794298a168.56853 168.56853 0 0 1 37.429536-4.186542c2.410728 0 4.811726 0.060816 7.205426 0.161769a249.539565 249.539565 0 0 1-1.764867-29.609873c0-5.121885 0.173932-10.217012 0.484091-15.286596 3.651365-59.787763 28.659934-115.491154 71.381639-158.211643 46.342662-46.342662 107.959757-71.865731 173.498239-71.86573 65.539698 0 127.155576 25.521852 173.498238 71.86573 46.342662 46.342662 71.865731 107.959757 71.865731 173.498239 0 16.313162-1.583637 32.383062-4.674283 48.035767a242.722142 242.722142 0 0 1-15.871641 50.55718c15.072525-5.59503 31.176481-8.522691 47.734122-8.522691 1.11779 0 2.233147 0.014596 3.346071 0.041355 35.320453 0.841687 68.400461 14.992248 93.471062 40.062849 25.861203 25.861203 40.102987 60.24388 40.102987 96.817133 0 36.573253-14.241785 70.95593-40.102987 96.817133-25.861203 25.861203-60.245096 40.102987-96.817133 40.102987l-0.063248-0.001216v0.001216H611.975892v44.821057h180.802186v-0.049868c98.550376-2.099353 177.796681-82.63738 177.796681-181.691309 0-95.656772-73.89697-174.050444-167.715896-181.210866z" p-id="3248"></path>
        </svg>
      </li>
      <li title="另存为文件" @click="out">
        <svg t="1622170677734" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4100" width="20" height="24">
          <path d="M512 371.2c-15.36 0-25.6 10.24-25.6 25.6v414.72L353.28 691.2c-10.24-10.24-25.6-7.68-35.84 2.56-10.24 10.24-7.68 25.6 2.56 35.84l176.64 161.28c5.12 5.12 10.24 7.68 17.92 7.68 2.56 0 7.68 0 10.24-2.56 10.24-5.12 15.36-12.8 15.36-23.04V396.8c-2.56-12.8-12.8-25.6-28.16-25.6zM670.72 691.2l-110.08 99.84c-10.24 10.24-10.24 25.6-2.56 35.84 5.12 5.12 12.8 7.68 17.92 7.68 5.12 0 12.8-2.56 17.92-7.68l110.08-99.84c10.24-10.24 10.24-25.6 2.56-35.84-7.68-10.24-25.6-10.24-35.84 0z" p-id="4101"></path>
          <path d="M773.12 368.64c-2.56-140.8-120.32-256-261.12-256S253.44 227.84 250.88 368.64C110.08 378.88 0 496.64 0 640c0 148.48 120.32 271.36 271.36 271.36 15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6C148.48 860.16 51.2 760.32 51.2 640c0-120.32 97.28-220.16 220.16-220.16h2.56c7.68 0 15.36-2.56 20.48-7.68 5.12-5.12 7.68-12.8 7.68-20.48v-17.92c0-115.2 94.72-209.92 209.92-209.92s209.92 94.72 209.92 209.92v17.92c0 7.68 2.56 15.36 7.68 20.48 5.12 5.12 12.8 7.68 20.48 7.68h5.12c120.32 0 220.16 99.84 220.16 220.16s-99.84 220.16-220.16 220.16c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6C903.68 911.36 1024 788.48 1024 640c0-143.36-110.08-261.12-250.88-271.36z" p-id="4102"></path>
        </svg>
      </li>
      <li title="另存为图片" @click="downloadImage">
        <svg t="1622170887312" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11235" width="20" height="24">
          <path d="M400.698 524.63c18.091-10.411 29.253-29.663 29.253-50.484s-11.162-40.038-29.253-50.483a58.641 58.641 0 0 0-58.47 0 58.197 58.197 0 0 0 0 100.966 58.641 58.641 0 0 0 58.47 0zM266.725 855.824V369.766h662.357v195.79a253.713 253.713 0 0 1 71.953 46.591V333.892c0-19.797-16.145-35.874-35.976-35.874H848.39L759.85 55.603a36.01 36.01 0 0 0-46.114-21.436L23.73 284.467C5.059 291.226-4.6 311.808 2.226 330.411l191.42 524.151c0.307 0.888 0.716 1.775 1.092 2.663v34.406c0 19.831 16.11 35.874 35.976 35.874H611.54a251.187 251.187 0 0 1-29.218-71.714H266.725v0.034z m-71.987-521.933V647.92L82.166 339.627l622.421-225.758 67.243 184.183H230.714c-19.865 0-35.976 16.043-35.976 35.84zM829.072 603.41c-107.691 0-195.004 87.006-195.004 194.321s87.313 194.253 195.004 194.253 194.97-86.938 194.97-194.253c0-107.315-87.28-194.32-194.97-194.32z m-10.923 308.463l-95.846-95.095h0.068a13.653 13.653 0 0 1-3.925-9.592c0-7.51 6.007-13.55 13.516-13.55h39.015v-98.441a13.62 13.62 0 0 1 13.175-16.999h89.157c7.509 0 13.55 6.11 13.55 13.654V793.6h39.254a13.585 13.585 0 0 1 8.874 23.79l-95.744 94.994a13.483 13.483 0 0 1-21.094-0.512z m-10.07-365.91l-43.007-42.87-189.918 188.722-118.272-71.372-144.52 117.828v71.407h263.44a342.87 342.87 0 0 1-0.273-11.947c0.034-132.471 102.332-241.118 232.55-251.767z m0 0" p-id="11236" fill="#333333"></path>
        </svg>
      </li>
      <li title="删除" @click="deleteNode" :class="selectType === 'canvas' ? 'disabled' : ''">
        <svg t="1622170848261" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8337" width="24" height="24">
          <path d="M733.85516357 791.94537354c0 26.57318115-21.62933349 48.20251465-48.20251464 48.20251464H338.34735107c-26.57318115 0-48.20251465-21.62933349-48.20251464-48.20251464V280.25714112h443.71032714v511.68823242zM386.54986573 193.73980713c0-5.56182862 4.3258667-9.88769531 9.88769531-9.88769531h231.74285888c5.56182862 0 9.88769531 4.3258667 9.88769531 9.88769531v29.04510498H386.54986573V193.73980713z m491.91284179 29.04510498H695.54034424V193.73980713c0-37.07885742-30.2810669-67.35992432-67.35992432-67.35992432h-231.74285888c-37.07885742 0-67.35992432 30.2810669-67.35992432 67.35992432v29.04510498H145.53729248C129.4697876 222.78491211 116.4921875 235.76251221 116.4921875 251.83001709s12.9776001 29.04510498 29.04510498 29.04510498h86.51733398v511.07025147c0 58.70819092 47.58453369 106.29272461 106.29272461 106.29272461h347.30529786c58.70819092 0 106.29272461-47.58453369 106.29272461-106.29272461V280.25714112h86.51733398c16.06750489 0 29.04510498-12.9776001 29.04510498-29.04510499s-12.9776001-28.42712403-29.04510498-28.42712402zM512 753.01257325c16.06750489 0 29.04510498-12.9776001 29.04510498-29.04510499v-308.99047852c0-16.06750489-12.9776001-29.04510498-29.04510498-29.04510497s-29.04510498 12.9776001-29.04510498 29.04510497v308.99047852c0 16.06750489 12.9776001 29.04510498 29.04510498 29.04510498m-135.33782959 0c16.06750489 0 29.04510498-12.9776001 29.04510498-29.04510498v-308.99047852c0-16.06750489-12.9776001-29.04510498-29.04510498-29.04510497s-29.04510498 12.9776001-29.04510498 29.04510497v308.99047852c0.61798096 16.06750489 13.59558106 29.04510498 29.04510498 29.04510498m270.67565918 0c16.06750489 0 29.04510498-12.9776001 29.04510499-29.04510498v-308.99047852c0-16.06750489-12.9776001-29.04510498-29.04510499-29.04510497s-29.04510498 12.9776001-29.04510498 29.04510497v308.99047852c0 16.06750489 12.9776001 29.04510498 29.04510498 29.04510498" fill="" p-id="8338"></path>
        </svg>
      </li>
      <li title="清除画布" @click="clear">
        <svg t="1622170936815" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11496" width="24" height="24">
          <path d="M786.304 502.848H237.696a109.696 109.696 0 0 1 0-219.392h164.608V173.696a109.696 109.696 0 1 1 219.392 0V283.52h164.608a109.696 109.696 0 0 1 0 219.392zM237.696 338.304a54.848 54.848 0 1 0 0 109.696h548.608a54.848 54.848 0 0 0 0-109.696H566.848V173.696a54.848 54.848 0 0 0-109.696 0v164.608H237.696z" p-id="11497" fill="#333333"></path>
          <path d="M786.304 941.696H237.696a54.848 54.848 0 0 1-54.848-54.848V448h658.304v438.848a54.848 54.848 0 0 1-54.848 54.848zM237.696 502.848v384h548.608v-384H237.696z" p-id="11498" fill="#333333"></path>
          <path d="M594.304 667.456c15.104 0 27.392 12.224 27.392 27.392v219.456a27.456 27.456 0 0 1-54.848 0v-219.456c0-15.168 12.288-27.392 27.456-27.392z m-164.608 0c15.168 0 27.456 12.224 27.456 27.392v219.456a27.456 27.456 0 0 1-54.848 0v-219.456c0-15.168 12.288-27.392 27.392-27.392z" p-id="11499" fill="#333333"></path>
        </svg>
      </li>
      <li title="提升层级" @click="toFront">
        <svg t="1622429346621" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7051" width="24" height="24">
          <path d="M852.032 64c24.32 0 43.968 21.12 43.968 47.36 0 23.872-16.576 43.712-38.016 46.848l-6.016 0.384H562.24l198.144 220.032c15.424 16.64 16.96 42.56 4.608 61.056l-4.608 5.824a41.728 41.728 0 0 1-57.28 4.608l-4.992-4.608-140.8-158.976v355.264l290.752 0.064c24.32 0 44.352 17.792 47.552 40.896l0.448 6.4a47.552 47.552 0 0 1-41.472 46.912l-6.528 0.384H557.248v176.256c0 23.936-16.512 43.712-37.952 46.848L513.28 960c-22.272 0-40.64-17.792-43.584-40.896l-0.384-6.4-0.064-176.256H176a47.808 47.808 0 0 1-47.552-40.832l-0.448-6.4c0-24 18.048-43.776 41.472-46.912l6.528-0.448 293.248-0.064V286.528L320.384 445.44a41.856 41.856 0 0 1-62.272 0 49.984 49.984 0 0 1-4.608-61.056l4.608-5.824 205.632-220.032H171.968c-22.272 0-40.64-17.792-43.52-40.832L128 111.36c0-24 16.576-43.776 38.016-46.912L172.032 64h679.936z" p-id="7052" fill="#333333"></path>
        </svg>
      </li>
      <li title="下降层级" @click="toBack">
        <svg t="1622429546069" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7266" width="24" height="24">
          <path d="M852.032 960c24.32 0 43.968-21.12 43.968-47.36 0-23.872-16.576-43.712-38.016-46.848l-6.016-0.384H562.24l198.144-220.032a49.984 49.984 0 0 0 4.608-61.056l-4.608-5.824a41.728 41.728 0 0 0-57.28-4.608l-4.992 4.608-140.8 158.976V382.208l290.752-0.064c24.32 0 44.352-17.792 47.552-40.896l0.448-6.4a47.552 47.552 0 0 0-41.472-46.912l-6.528-0.384H557.248V111.296c0-23.936-16.512-43.712-37.952-46.848L513.28 64c-22.272 0-40.64 17.792-43.584 40.896l-0.384 6.4-0.064 176.256H176a47.808 47.808 0 0 0-47.552 40.832l-0.448 6.4c0 24 18.048 43.776 41.472 46.912l6.528 0.448 293.248 0.064v355.264L320.384 578.56a41.856 41.856 0 0 0-62.272 0 49.984 49.984 0 0 0-4.608 61.056l4.608 5.824 205.632 220.032H171.968c-22.272 0-40.64 17.792-43.52 40.832l-0.448 6.4c0 24 16.576 43.776 38.016 46.912l6.016 0.448h679.936z" p-id="7267" fill="#333333"></path>
        </svg>
      </li>
      <!-- <li title="全选" @click="selectAll">
        <svg t="1622171056602" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13195" width="24" height="24"><path d="M561.3 693.2c-6.6 0-13-2.6-17.7-7.3L372.5 513.6c-9.7-9.7-9.7-25.5 0.1-35.3 9.7-9.7 25.5-9.7 35.3 0.1l153.6 154.5 321.8-322c9.7-9.7 25.5-9.7 35.3 0 9.7 9.7 9.7 25.5 0 35.3L578.9 685.9c-4.6 4.6-10.9 7.3-17.6 7.3z m0 0" p-id="13196" fill="#333333"></path><path d="M803.1 901.7H279.7c-28 0-50.6-21-50.6-46.9V298.2c0-25.9 22.8-46.9 50.6-46.9h389.1c15.4 0 27.8 12.4 27.8 27.8s-12.4 27.8-27.8 27.8H284.7V846h513.5V593.7c0-15.4 12.4-27.8 27.8-27.8s27.8 12.4 27.8 27.8v261.1c0 25.8-22.8 46.9-50.7 46.9z m0 0" p-id="13197" fill="#333333"></path><path d="M144.2 122h349.3c15.4 0 27.8 12.4 27.8 27.8s-12.4 27.8-27.8 27.8H152.9v277.8c0 15.4-12.4 27.8-27.8 27.8s-27.8-12.4-27.8-27.8V168.9c0-25.8 21-46.9 46.9-46.9z m0 0" p-id="13198" fill="#333333"></path></svg>
      </li> -->
      <li title="多选" @click="toggleMode">
        <svg t="1622171250584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20209" width="20" height="24">
          <path d="M521.6768 524.9536L1024 751.7696l-180.3264 90.7776L753.5616 1024l-231.936-499.0464z m379.9552-460.1344v129.6384h-64.4096V64.8192h-128.768V0h193.1776v64.8192zM64.4096 842.5472h128.8192v64.768H0v-194.4064h64.4096v129.6384z m0-777.728v129.6384H0V0h193.1776v64.8192H64.4096zM321.9968 0h257.6384v64.8192H321.9968V0z m0 842.5472h257.6384v64.768H321.9968v-64.768zM0 324.0448h64.4096v259.2256H0V324.096z m837.2224 0h64.4096v259.2256h-64.4096V324.096z" p-id="20210"></path>
        </svg>
      </li>
      <li title="组合" @click="addGroup" :class="model === 'default' ? 'disabled' : ''">
        <svg t="1622171282281" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21081" width="24" height="24">
          <path d="M880.904 97.272H172.328a59.056 59.056 0 0 0-59.048 59.048v708.584a59.064 59.064 0 0 0 59.048 59.064h708.584a59.072 59.072 0 0 0 59.064-59.064V156.328a59.072 59.072 0 0 0-59.072-59.056z m0 738.112c0 16.312-13.2 29.52-29.52 29.52H202.768a29.512 29.512 0 0 1-29.52-29.52V186.768a29.52 29.52 0 0 1 29.52-29.52h648.616a29.512 29.512 0 0 1 29.52 29.52v648.616z m-118.08-422.656H624.88V275.336a59.056 59.056 0 0 0-59.048-59.04H292.016a59.04 59.04 0 0 0-59.048 59.04v275.056a59.048 59.048 0 0 0 59.048 59.04h137.936v137.392a59.064 59.064 0 0 0 59.04 59.048h273.824a59.064 59.064 0 0 0 59.048-59.048V471.768a59.048 59.048 0 0 0-59.04-59.04zM322.256 549.776a29.536 29.536 0 0 1-29.52-29.536V306.064a29.528 29.528 0 0 1 29.52-29.536H535.6a29.52 29.52 0 0 1 29.512 29.536v106.664h-76.12a59.048 59.048 0 0 0-59.048 59.04v78H322.256v0.008zM565.12 472.96v47.272a29.52 29.52 0 0 1-29.512 29.536h-45.888V502.48a29.536 29.536 0 0 1 29.528-29.528h45.872z m196.976 243.696a29.52 29.52 0 0 1-29.52 29.536H519.24a29.528 29.528 0 0 1-29.528-29.536V609.432h76.128a59.048 59.048 0 0 0 59.048-59.04V472.96h107.688a29.52 29.52 0 0 1 29.52 29.528v214.168z" p-id="21082"></path>
        </svg>
      </li>
      <li title="取消组合" @click="unGroup" :class="selectType !== 'combo' ? 'disabled' : ''">
        <svg t="1622171318289" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21930" width="24" height="24">
          <path d="M918.1 355.2h-248v-248c0-23.2-18.8-42-42-42H107c-23.2 0-42 18.8-42 42v521.1c0 23.2 18.8 42 42 42h248v248c0 23.2 18.8 42 42 42h521.1c23.2 0 42-18.8 42-42V397.2c0-23.1-18.8-42-42-42zM125 610.3V125.2h485.1v230H397c-23.2 0-42 18.8-42 42v213.1H125z m485.1-195.1v195.1H415V415.2h195.1z m290 485.1H415v-230h213.1c23.2 0 42-18.8 42-42V415.2h230v485.1z" fill="#333333" p-id="21931"></path>
        </svg>
      </li>
    </ul>

    <div id="view">
      <div id="leftTool">
        <left-tool :gra="graph" v-if="graph"></left-tool>
      </div>
      <div ref="container" id="container"></div>
      <div id="right-part">
        <div id="detailpannel">
          <div id="canvasAttributeBar" class="pannel" v-if="selectType === 'canvas'">
            <div class="title">画布属性栏</div>
            <div class="main">
              <form class="el-form el-form--label-right">
                <div class="el-form-item el-form-item--small">
                  <label class="el-form-item__label" style="width: 80px;">网格对齐</label>
                  <div class="el-form-item__content" style="margin-left: 80px;">
                    <label class="el-checkbox" :class="canvasAttributeForm.grid ? 'is-checked' : ''">
                      <span class="el-checkbox__input" :class="canvasAttributeForm.grid ? 'is-checked' : ''">
                        <span class="el-checkbox__inner"></span>
                        <input type="checkbox" class="el-checkbox__original" v-model="canvasAttributeForm.grid" @change="toggleGridShowStatus">
                      </span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="nodeAttributeBar" class="pannel" v-if="selectType === 'node'">
            <div class="title">节点属性</div>
            <div class="main">
              <form class="el-form el-form--label-top">
                <div class="el-form-item el-form-item--small"><label class="el-form-item__label" style="">节点文本</label>
                  <div class="el-form-item__content" style="">
                    <div class="el-input el-input--small">
                      <input type="text" v-model="nodeAttributeForm.label" @change="saveNodeAttribute" autocomplete="off" class="el-input__inner">
                    </div>
                  </div>
                </div>
                <div class="el-form-item el-form-item--small"><label class="el-form-item__label">条件</label>
                  <div class="el-form-item__content">
                    <div class="el-textarea el-input--small">
                      <textarea autocomplete="off" v-model="nodeAttributeForm.sql" @change="saveNodeAttribute" class="el-textarea__inner" style="min-height: 31px; height: 31px;">
                      </textarea>
                    </div>
                  </div>
                </div>
                <div class="el-form-item el-form-item--small" v-if="nodeAttributeForm.nodetype === 'regularNode'">
                  <label class="el-form-item__label">宽度</label>
                  <div class="el-form-item__content">
                    <div class="el-input el-input--small">
                      <input type="text" v-model="nodeAttributeForm.width" @change="saveNodeAttribute" autocomplete="off" class="el-input__inner">
                    </div>
                  </div>
                </div>
                <div class="el-form-item el-form-item--small" v-if="nodeAttributeForm.nodetype === 'regularNode'">
                  <label class="el-form-item__label">高度</label>
                  <div class="el-form-item__content">
                    <div class="el-input el-input--small">
                      <input type="text" v-model="nodeAttributeForm.height" @change="saveNodeAttribute" autocomplete="off" class="el-input__inner">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="edgeAttributeBar" class="pannel" v-if="selectType === 'edge'">
            <div class="title">边属性</div>
            <div class="main">
              <form class="el-form el-form--label-top">
                <div class="el-form-item el-form-item--small"><label class="el-form-item__label">边文本</label>
                  <div class="el-form-item__content">
                    <div class="el-input el-input--small">
                      <input type="text" v-model="edgeAttributeForm.label" @change="saveEdgeAttribute" autocomplete="off" class="el-input__inner">
                    </div>
                  </div>
                </div>
                <div class="el-form-item el-form-item--small"><label class="el-form-item__label">表达式</label>
                  <div class="el-form-item__content">
                    <div class="el-textarea el-input--small">
                      <textarea v-model="edgeAttributeForm.reg" @change="saveEdgeAttribute" autocomplete="off" class="el-textarea__inner" style="min-height: 31px; height: 31px;">
                      </textarea>
                    </div>
                  </div>
                </div>
                <div class="el-form-item el-form-item--small"><label class="el-form-item__label">匹配结果</label>
                  <div class="el-form-item__content">
                    <div class="el-input el-input--small">
                      <input type="text" v-model="edgeAttributeForm.val" @change="saveEdgeAttribute" autocomplete="off" class="el-input__inner">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="groupAttributeBar" class="pannel" v-if="selectType === 'combo'">
            <div class="title">群组属性栏</div>
            <div class="main">
              <form class="el-form el-form--label-top">
                <div class="el-form-item el-form-item--small"><label class="el-form-item__label">组名</label>
                  <div class="el-form-item__content">
                    <div class="el-input el-input--small">
                      <input type="text" v-model="groupAttributeForm.label" @change="saveGroupAttribute" autocomplete="off" class="el-input__inner">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="minimap" ref="minimap">
          <div class="title">缩略图</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import leftTool from "./leftTool.vue";
import { fittingString } from "@/utils/fittingString"; //超长文本
import { contextMenu, grid, SnapLine } from "../plugins/plugins"; //插件
import { regis } from "../custom/customNode"; //自定义节点
import { cRect } from "../custom/customCombo"; //自定义combo
import { customEdges } from "../custom/customEdge"; //自定义combo
import { randomId } from "@/utils/randomId";
import '../assets/css/main.css';
export default {
  name: "g6-flow",
  components: {
    leftTool,
  },
  data() {
    return {
      fileList: [],
      uploadData: [],
      sourceAnchorIdx: undefined,
      targetAnchorIdx: undefined,
      flag: "col",
      inpValue: "",
      nodeId: "",
      stroke: "", //保留移入边之前的颜色
      drawer: false,
      selectType: "canvas",
      showNode: {
        id: "",
        lable: "",
        newLabel: "",
        sql: "",
        style: {
          fill: "",
          stroke: "",
        },
      },
      showEdegs: {
        id: "",
        lable: "",
        sql: "",
      },
      da: {},
      graph: null,
      model: "default",
      nodeAttributeForm: {
        label: "",
        width: "",
        height: "",
        type: "sql",
        sql: "",
      },
      edgeAttributeForm: {
        label: "",
        reg: "",
        val: "",
      },
      canvasAttributeForm: {
        grid: true,
        cell: 18,
      },
      groupAttributeForm: {
        label: "",
      },
    };
  },
  computed: {
    // newda() {
    //   let obj = {};
    //   obj = { ...this.da };
    //   const newNodes = obj.nodes.map(function (node) {
    //     return {
    //       ...node,
    //       label: fittingString(node.label, node.size, 12),
    //       newLabel: node.label,
    //     };
    //     //    node.label = fittingString(node.label, node.size, 12  );
    //   });
    //   obj.nodes = newNodes;
    //   return obj;
    // },
  },
  mounted() {
    this.initGraph();
  },
  methods: {
    initGraph() {
      regis(G6);
      cRect(G6);
      customEdges(G6);
      const toolbar = new G6.ToolBar({
        container: this.$refs["toolbar"],
      });
      const minimap = new G6.Minimap({
        container: this.$refs["minimap"],
      });
      const graph = new G6.Graph({
        container: this.$refs["container"],
        width: window.document.documentElement.clientWidth - 150,
        height: window.document.documentElement.clientHeight - 70,
        plugins: [contextMenu(G6), grid(G6), SnapLine(G6), toolbar, minimap],
        fitCenter: true,
        groupByTypes: false,
        enabledStack: true,
        defaultCombo: {
          type: "cRect",
          padding: [30, 20, 10, 20],
          fixCollapseSize: [100, 15],
          style: {
            lineWidth: 1,
            fill: "#EFF1F2",
          },
          labelCfg: {
            refY: 10,
            refX: 20,
            position: "top",
          },
        },
        modes: {
          default: [
            "drag-canvas",
            "drag-combo",
            {
              type: "drag-node",
              shouldBegin: (e) => {
                if (e.target.get("name") === "anchor-point") return false;
                return true;
              },
            },
            "drag-node-with-group",
            "zoom-canvas",
            {
              type: "create-edge",
              trigger: "drag",
              edgeConfig: {
                type: "polyline",
                style: {
                  endArrow: false,
                  stroke: "#409EFF",
                  lineDash: [5],
                },
              },
              shouldBegin: (e) => {
                if (e.target && e.target.get("name") !== "anchor-point")
                  return false;
                this.sourceAnchorIdx = e.target.get("anchorPointIdx");
                e.target.set("links", e.target.get("links") + 1);
                return true;
              },
              shouldEnd: (e) => {
                if (e.target && e.target.get("name") !== "anchor-point")
                  return false;
                if (e.target) {
                  this.targetAnchorIdx = e.target.get("anchorPointIdx");
                  e.target.set("links", e.target.get("links") + 1);
                  return true;
                }
                this.targetAnchorIdx = undefined;
                return true;
              },
            },
            "click-select",
          ],
          brush: [
            {
              type: "brush-select",
              trigger: "drag",
            },
          ],
        },
        defaultEdge: {
          type: "polyline",
          style: {
            lineWidth: 1.5,
            lineAppendWidth: 3,
            stroke: "#d8d8d8",
            radius: 10,
            offset: 20,
            endArrow: {
              path: G6.Arrow.triangle(5, 7, 5),
              d: 5,
              fill: "#d8d8d8",
            },
          },
        },
      });
      // graph.data(this.newda); // 读取 Step 2 中的数据源到图上
      // graph.render(); // 渲染图
      this.graph = graph;
      window.graph = graph;
      graph.on("click", () => {
        this.selfClearItemStates(graph);
        this.selectType = "canvas";
        graph.setMode("default");
        this.model = "default";
      });
      // 事件监听
      graph.on("node:click", (e) => {
        this.selectType = "node";
        const item = e.item.get("model");
        this.nodeAttributeForm.nodetype = item.nodetype;
        this.nodeAttributeForm.label = item.label_form;
        this.nodeAttributeForm.sql = item.sql;
        this.nodeAttributeForm.width = item.size[0];
        this.nodeAttributeForm.height = item.size[1];
      });
      // 单击标记时折叠/展开
      graph.on("combo:click", (e) => {
        if (e.target.get("name") === "combo-keyShape") {
          this.selectType = "combo";
          const item = e.item.get("model");
          this.groupAttributeForm.label = item.label;
        }
        if (e.target.get("name") === "combo-marker-shape") {
          graph.collapseExpandCombo(e.item);
          if (graph.get("layout")) graph.layout();
          else graph.refreshPositions();
        }
      });
      // 边的移入事件
      graph.on("edge:mouseenter", (e) => {
        if (e.item) {
          graph.setItemState(e.item, "active", true);
        }
      });
      // 移除事件
      graph.on("edge:mouseout", (e) => {
        if (e.item) {
          if (e.item.hasState("selected")) {
            return;
          } else {
            graph.setItemState(e.item, "active", false);
          }
        }
      });

      graph.on("aftercreateedge", (e) => {
        let model = e.edge.getModel();
        let style = model.style;
        graph.updateItem(e.edge, {
          sourceAnchor: this.sourceAnchorIdx,
          targetAnchor: this.targetAnchorIdx,
          style: {
            ...style,
            stroke: "#d8d8d8",
            endArrow: {
              path: G6.Arrow.triangle(5, 7, 5), // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
              d: 5,
              fill: "#d8d8d8",
            },
            lineDash: [],
          },
        });
        const nodes = this.graph.getNodes();
        this.showItemAnchors(nodes, false);
      });
      //边的点击事件
      graph.on("edge:click", (e) => {
        this.selectType = "edge";
        const item = e.item.get("model");
        this.edgeAttributeForm.label = item.label;
        this.edgeAttributeForm.reg = item.reg;
        this.edgeAttributeForm.val = item.val;
        graph.setItemState(e.item, "selected", true);
      });
      // 从第一个节点拖动后，创建边，更新sourceAnchor
      graph.on("afteradditem", (e) => {
        if (e.item && e.item.getType() === "edge") {
          graph.updateItem(e.item, {
            sourceAnchor: this.sourceAnchorIdx,
          });
          const nodes = this.graph.getNodes();
          this.showItemAnchors(nodes, true);
        }
        if (e.item._cfg.type === "node") {
          this.selfClearItemStates(graph);
          graph.setItemState(e.item, "selected", true);
          this.selectType = "node";
          const item = e.model;
          this.nodeAttributeForm.nodetype = item.nodetype;
          this.nodeAttributeForm.label = item.label_form;
          this.nodeAttributeForm.sql = item.sql;
          this.nodeAttributeForm.width = item.size[0];
          this.nodeAttributeForm.height = item.size[1];
        }
      });
      // 如果在结束前取消创建边，请更新锚点圆上的“链接”
      graph.on("afterremoveitem", (e) => {
        this.selectType = "canvas";
        if (e.item && e.item.source && e.item.target) {
          const sourceNode = graph.findById(e.item.source);
          const targetNode = graph.findById(e.item.target);
          const { sourceAnchor, targetAnchor } = e.item;
          if (sourceNode && !isNaN(sourceAnchor)) {
            const sourceAnchorShape = sourceNode
              .getContainer()
              .find(
                (ele) =>
                  ele.get("name") === "anchor-point" &&
                  ele.get("anchorPointIdx") === sourceAnchor
              );
            sourceAnchorShape.set("links", sourceAnchorShape.get("links") - 1);
          }
          if (targetNode && !isNaN(targetAnchor)) {
            const targetAnchorShape = targetNode
              .getContainer()
              .find(
                (ele) =>
                  ele.get("name") === "anchor-point" &&
                  ele.get("anchorPointIdx") === targetAnchor
              );
            targetAnchorShape.set("links", targetAnchorShape.get("links") - 1);
          }
          this.selfClearItemStates(graph);
          const nodes = this.graph.getNodes();
          this.showItemAnchors(nodes, false);
        }
      });
      // 一些侦听器控制节点的状态以显示和隐藏锚点圆
      graph.on("node:mouseenter", (evt) => {
        const { item } = evt;
        graph.setItemState(item, "active", true);
        graph.setItemState(item, "showAnchors", true);
      });
      graph.on("node:mouseleave", (evt) => {
        const { item } = evt;
        graph.setItemState(item, "active", false);
        graph.setItemState(item, "showAnchors", false);
      });
    },
    selfClearItemStates(graph) {
      graph = graph ? graph : this.graph;
      const nodes = graph.findAllByState("node", "selected");
      const edges = graph.findAllByState("edge", "selected");
      const combos = graph.findAllByState("combo", "selected");
      nodes &&
        nodes.map((node) => {
          graph.clearItemStates(node, "selected");
        });
      edges &&
        edges.map((edge) => {
          graph.clearItemStates(edge, "selected");
        });
      combos &&
        combos.map((combo) => {
          graph.clearItemStates(combo, "selected");
        });
    },
    showItemAnchors(nodes, flag = true) {
      nodes.map((node) => {
        this.graph.setItemState(node, "showAnchors", flag);
        this.graph.setItemState(node, "connect", flag);
      });
    },
    // 拿到所有的节点，边，实例
    save() {
      const source = this.graph.save();
      const data = JSON.stringify(source);
      return data;
    },
    out() {
      // const source = this.graph.save();
      // const data = JSON.stringify(source);
      // const blob = new Blob([data], { type: "application/json" });
      // FileSaver.saveAs(blob, `文件名称.json`);
    },
    fileSuccess(file) {
      let reader = new FileReader();
      reader.readAsText(file.raw);
      reader.onload = (e) => {
        this.da = {};
        this.uploadData = [];
        this.uploadData = JSON.parse(e.target.result);
        this.graph.changeData(this.uploadData);
      };
    },
    readUploadData() {
      let uploadButton = document.createElement("input");
      uploadButton.setAttribute("type", "file");
      uploadButton.setAttribute("accept", ".json");
      uploadButton.addEventListener("change", () => {
        let file = uploadButton.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
          console.log(this.graph);
          this.graph.read(JSON.parse(e.target.result));
          this.graph.render();
        };
        reader.readAsText(file);
      });
      uploadButton.click();
    },
    toggleMode() {
      let model = this.graph.getCurrentMode();
      this.graph.setMode(model === "default" ? "brush" : "default");
      this.model = model === "default" ? "brush" : "default";
    },
    addGroup() {
      if (this.model === "brush") {
        const nodes = this.graph.findAllByState("node", "selected");
        if (nodes.length > 0) {
          const edges = this.graph.findAllByState("edge", "selected");
          let nodesId = nodes.map((node) => {
            return node.getModel().id;
          });
          this.graph.createCombo(
            { id: randomId(false, 19), label: "新建分组", type: "cRect" },
            nodesId
          );
          this.graph.setMode("default");
          nodes.map((node) => {
            this.graph.clearItemStates(node, ["selected", "showAnchors"]);
            // this.graph.setItemState(item, "showAnchors", false);
            this.graph.updateItem(node, {
              ...node.getModel(),
              style: {
                shadowColor: "",
                shadowBlur: "",
              },
            });
          });
          edges.map((edge) => {
            this.graph.clearItemStates(edge, "selected");
          });
        } else {
          return false;
        }
      }
    },
    unGroup() {
      const combos = this.graph.findAllByState("combo", "selected");
      console.log(combos);
      combos.map((combo) => {
        this.graph.uncombo(combo.getModel().id);
      });
    },
    downloadImage() {
      this.graph.downloadImage(
        `流程图_${new Date().getTime()}_`,
        "image/jpeg",
        "#f2f2f2"
      );
    },
    deleteNode(e) {
      if (this.selectType === "canvas") {
        e.preventDefault();
      }
      const nodes = this.graph.findAllByState("node", "selected");
      const edges = this.graph.findAllByState("edge", "selected");
      const combos = this.graph.findAllByState("combo", "selected");
      nodes &&
        nodes.map((node) => {
          this.graph.removeItem(node);
        });
      edges &&
        edges.map((edge) => {
          this.graph.removeItem(edge);
        });
      combos &&
        combos.map((combo) => {
          this.graph.removeItem(combo);
        });
      this.selectType = "canvas";
    },
    clear() {
      this.graph.clear();
    },
    toFront() {
      const nodes = this.graph.findAllByState("node", "selected");
      nodes.map((node) => {
        node.toFront();
      });
    },
    toBack() {
      const nodes = this.graph.findAllByState("node", "selected");
      nodes.map((node) => {
        node.toBack();
      });
    },
    selectAll() {},
    toggleGridShowStatus() {
      if (this.canvasAttributeForm.grid) {
        this.$refs.container.getElementsByClassName("g6-grid-container")[0].style.display =
          "block";
      } else {
        this.$refs.container.getElementsByClassName("g6-grid-container")[0].style.display =
          "none";
      }
    },
    saveNodeAttribute() {
      const nodes = this.graph.findAllByState("node", "selected");
      const model = nodes[0].getModel();
      this.graph.updateItem(model.id, {
        sql: this.nodeAttributeForm.sql,
        label: fittingString(
          this.nodeAttributeForm.label,
          [
            parseInt(this.nodeAttributeForm.width),
            parseInt(this.nodeAttributeForm.height),
          ],
          12
        ),
        label_form: this.nodeAttributeForm.label,
        size: [
          parseInt(this.nodeAttributeForm.width),
          parseInt(this.nodeAttributeForm.height),
        ],
      });
    },
    saveEdgeAttribute() {
      const edges = this.graph.findAllByState("edge", "selected");
      const model = edges[0].getModel();
      this.graph.updateItem(model.id, {
        label: this.edgeAttributeForm.label,
      });
    },
    saveGroupAttribute() {
      const combos = this.graph.findAllByState("combo", "selected");
      const model = combos[0].getModel();
      this.graph.updateItem(model.id, {
        label: this.groupAttributeForm.label,
      });
    },
  },
};
</script>

<style lang="less" scoped>
#view {
  height: calc(100vh - 50px);
  display: flex;
}
#header {
  height: 49px;
  background-color: skyblue;
}
#container {
  flex: 1;
  width: 0px;
  flex-shrink: 0;
  /deep/ .g6-component-contextmenu {
    padding: 8px 20px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #545454;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: rgb(174 174 174) 0px 0px 10px;
    .g6-contextmenu-ul {
      cursor: pointer;
      text-align: center;
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
}

.g6-grid-container {
  width: auto !important;
}

#leftTool {
  width: 100px;
  text-align: center;
  background-color: #d5dbdd;
  flex-shrink: 0;
}
ul {
  padding: 0;
}
li {
  text-align: center;
  list-style: none;
}
.btn {
  position: absolute;
  right: 6%;
}
.upload {
  display: inline-block;
}
#topTool {
  position: absolute;
  margin-left: 100px;
  width: 250px;
}
.iconTool {
  /* display:flex; */
  position: absolute;
  top: 10px;
  left: 120px;
  /* border:1px solid gery; */
  /* box-shadow: 10px 10px 5px #888888; */
}

#toolbar {
  background: #fbfbfb;
  border-bottom: 1px solid #dadce0;
  padding: 4px 14px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  height: 30px;
  /deep/ .g6-component-toolbar {
    position: relative !important;
    float: left !important;
    border: none !important;
    padding: 0 !important;
    li {
      display: inline-block !important;
    }
  }
  li {
    display: inline-block;
    text-align: center;
    width: 35px;
    height: 24px;
    cursor: pointer;
    list-style-type: none;
    list-style: none;
    margin-left: 0px;
    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  i {
    font-size: 18px;
    padding: 4px;
    margin-right: 8px;
    cursor: pointer;
    &.iconfont {
      font-size: 20px;
    }
    // &:hover {
    //   cursor: pointer;
    //   background-color: #eeeeee;
    //   color: #5cb6ff;
    // }
  }
}

#right-part {
  width: 250px;
  background-color: #fbfbfb;
  flex-shrink: 0;
  border-left: 1px solid #dadce0;
  z-index: 9999;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;

  #detailpannel {
    overflow-y: scroll;
    -webkit-box-flex: 1;
    flex-grow: 1;
    .pannel {
      .title {
        height: 34px;
        line-height: 34px;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-weight: bold;
        font-size: 13px;
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: #dadce0;
      }
      .main {
        padding: 10px;
      }
    }
  }
  #minimap {
    background-color: #fbfbfb;
    border-top: 1px solid #ccc;
    width: 100%;
    height: 200px;
    .title {
      height: 34px;
      line-height: 34px;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-weight: bold;
      font-size: 13px;
    }
  }
}
</style>