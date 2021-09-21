from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from fake_useragent import UserAgent

PATH = "C:\Program Files (x86)\chromedriver.exe"  ##constant file path of Chrome driver

options = Options()
ua = UserAgent()
userAgent = ua.random
print(userAgent)
options.add_argument(f'user-agent={userAgent}')
driver = webdriver.Chrome(chrome_options=options, executable_path=PATH)
driver.get("https://www.google.co.in/%22")
driver.quit()

# driver.get("https://www.effectivecpmgate.com/xg73fv51j?key=e644eadf846ba5869a6321688f8eac4a")
# time.sleep(60)
# driver.quit()


#
# options = webdriver.ChromeOptions()  # Initializing Chrome Options from the Webdriver
# options.add_experimental_option("useAutomationExtension", False)  # Adding Argument to Not Use Automation Extension
# options.add_experimental_option("excludeSwitches", ["enable-automation"])  # Excluding enable-automation Switch
# options.add_argument("disable-popup-blocking")
# options.add_argument("disable-notifications")
# options.add_argument("disable-gpu")  ##renderer timeout
#
# driver = webdriver.Chrome(service=PATH,options=options)
