import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full clear-both py-4">
            <div className="container py-6 px-8 rounded-lg mx-auto mt-10 flex bg-gray-50 flex-col sm:flex-row justify-between items-center gap-4">
                {/* Copyright text */}
                <div className="text-gray-500 text-sm">
                    formcarry. all rights reserved
                </div>

                {/* Center links */}
                <div className="flex gap-6 text-sm text-gray-500">
                    <a
                        href="/terms"
                        className="hover:text-gray-900 transition-colors"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="/privacy"
                        className="hover:text-gray-900 transition-colors"
                    >
                        Privacy Policy
                    </a>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-8">
                    <a
                        href="https://twitter.com"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Twitter"
                    >
                        <img className="w-6 h-6"
                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD50lEQVR4nO2ZXWgcVRTHb1rB1vpF1WIriFhRrIgR9UkhtZhm595JmrjnP2n9oH7AzjmzxtIWraASij75hdC+KBb6VkVBfNEi+iLFti/1QSkKoiIirYokpWobk7Tc2dimu93Z3cmdzFb2D4eFXWbv/O455557z1Wqo4466mg+VBgurfSLstYDP+QV2deIugEsVBeCBgaeuMyAXzTE3xnIqVrj3wzkLQuZ9D8a0bVeEN5b84OH8u0qYxmEQwZy9PwAUg10woBfrvZQ33B4gyHZaUj+KRT5znMG6BsqLdeQvwzx+swgSJ41kOnmIOSMaeIPfUT3afBzhmSfJp6Kvwe/XzOID9lS+VFOegh7XUNo8KOtAphk+7V3iJfVzhbk43NdGpErCB+l6zX4b1cQmuT3/mJ0m/1vILrUBNw3C4R/qnLnlAY/7QJEk+x25wn+SiMMfAhryB5DfFwjKswCkbHz0oPffQClK9JCFB4eubziYVfe4Kmq93umetaO1H0Y/IMHXpPKGwgDx7lxapa9UjOgIdnf8EGSD+zS1wqIAW/PAGBaQ56vM3PyWgtr+zv/JVtDjxC/7RaC//UDGaw7oB/IPa3OioF86pM8vhZPLq0LAtnhEkRDjjURBvJ5qgFIJmaefckPpN8gvE4p1TWrCLoMq7GGIAWEq1yt97awxks6yY+OPfJLEkPX2VCINlQvcW1lxIfrUvT0jF6kSb42CJ8qYOSaGMZhJXZr/EliWNmyf8Z9xD8n1ZV8PSI7G4Hszf0l0dg0SZQIYiCbLggQRN2JIOvWbbrSEI/n/aImMax4vKljsIFsa28QeU81I0ubuijOS1iFgWqpMUCyr/0g5Jg9RKlWVCiMXKzBb7ZTYdSQHSqt7A43Pt2R/JkzyHQf+JaWAQzkrsqulbdr8Ou2mmrIZI7e2JPKE8DmxRr8R97hZKyRTPQjukmllQcutwcIv5EaouIVLMx920Lyfe8jW5eoucp2TzTky5zyYtKH9ChXivOFZFeaVuccbZvKQpXeq3xkD//ztBXpUlnKNty8Inu2p5RFwdQke21BVllrdHR0QbzlJz7uPi/4MxvKmQNUOiR8IJPkJtmdqScG1pdXGLAYyLfZ5EScc3NPbI2o2wThHeZBuTH+LIarbdOtciPEh7NMag3+xiuW7nYy471DvGzmGmsi89XorI1p4hd6Nm5cpFzLGy7fbDdnlcZadgCG+NXBwfJVKmv5G0pX2wseAznkJnxkUkO+0Ige8/3SJSoP6WG5VZOM2EtHu+9pqroTj2vIQXu9bEiQ1ODOTcDmxfaAEy8IdikmgQEP6EDut2eYmeZ1Rx2p/5FOAxjFKPNARAlSAAAAAElFTkSuQmCC"
                             alt="twitter"/>
                    </a>
                    <a
                        href="https://facebook.com"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Facebook"
                    >
                        <img className="w-6 h-6"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXklEQVR4nO2ZO2zUQBCGfTxS8BBCVBQ8JEgJTXoiHnl45/I67/ikQAPFecYpKWhAF4EEEUoDBTQ0iAICNAGCENDQIRoiBAJ6OpKQACEJRQ6tL0ogOTv2eX1npPul6Xw7/nZ2xzNzhtFQQ+kWorsNbEeA5CFAfgzIn0DyFEj+vWRTAvmjkPQIkK+YFpnqN0ZKlFEvBMj3AWkekEuRTPIcSB4R6HaqtYx6CCQjIL2L/PI+JiSPC4tztQPIOc0C6aUugAr2vAvdg4lCmDZZgDydIETJiw7ydxOpPwmGDCAPJg0Aa+/QkM67kxGSbtYcApejc0MLjEqV9YKAFbsUCyKLnE8BRKl8zJyTcbLTD01nfQ6QbnkpO+c09/YO7DqBhR3Qzzs78s5+EwcOCeTh4DVopjNfOBAZRFuKlfyio6+we93oSz697n2R/CxaNNCVOiCE5LHW1uKmMD7DgIBnTl9YjoyOL7ZAmlBHKKzT8CD0NlQWW6qd4kcD6XJYiGggXAKbOtZdsFwAxgfpsvhwgI8WQLq+5MszIelN+E3iu4EQ3d1ntldVxa654DSDiBv9IATyQsxo/8pmC1v8o6H6CR3HSvK4nw+BdFuHj6zF7f4g5aYothOQ9MofhL8kfgeh3NnFB0F+6uMi43WLWkB4NCAi9FnT0RqrtD4iNmnaqJJqm4MiMvnfgEj+6gsSN5vUEgSQ5jWDOH2q+PvbgqYjq59dNuSrEY/WQgAIfYsKYqLTZmiQQLoXDYQmfBfzZlF1AlE1FETz/cF/VySP1QOkWCxuEMiz2tKv+sjUA0Tk3H1a21+BDFEXFJLdchG4YgFzqczqZ5VlkSkyiB1QAatCDCT9rGJ3app+BfJs26mzW4PDjPQg7SAgeSQQwouKxe1pB8la7vFwAzmk92kFEQEtwhoJy+1JKwjYjggNEncclBSIiDoOUlKDMzUVTxHIdBYLe41q5BWEyIspAFkU6NhGHAnJF1MAMmjoEEi+Vi8QgTysBWIZBvlc2GOmCWRRWyQq/fUWpmfRADIZZcYbo1KlJ0mBCOTRnjzvSRTiHyBk8BtzVgdCr9Xc2aiXhO0eAUl31Jg0Koj6TqnJo1rDSIsQsclEOiYknVeJodIzLYXCZpD8EJAuCJuPqt/U/k0basiIoj+9tBo0ELlbUgAAAABJRU5ErkJggg=="
                            alt="facebook-new"/>
                    </a>
                    <a
                        href="https://github.com"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="GitHub"
                    >
                        <img className="w-7 h-7"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXUlEQVR4nO2Vy2sTcRDHVwUVBQ8KUp9I1atnH0hFaZv+ZhOT7O+bCAoVxOzMxughVyHgf6FSH+hJEBQpehD8C7x4iic9eBMq1netD7atyWbfuxbx0IFlYfnNfOY7O78Zw1ix/81MNHYrLS2l5QlBuqT548ID6S5+sy+crMuuZQMS7B0Euaog8wT5FfcozT8Icm+8bu/5O5U1KSvwhyRgIAHILIFLOZXKpSUFmaBe9Qp8MbtSnR86WPqUyguV1k5/eQs1Pli05IDSMhUPkqmFc5Yc9pa9dKq5PREcFrxQaK3zVsOEjIxWeCuANe6bLPuY+/3PmZHJyfW+GNeTr0xI9xbh7DMyGFXt/b5mm3crGae2FVbCiZp9JBPY4qOBGOBmtAP4cRDM97NAeyIgD33/fzoarPmlH2yicSgPOER1Ny7L2bjGymKjZ9ob/UPFiMxycfYOgk+3NuUBl8vNLT7wpxiwvAqUuibFPGBlSdXXK6+jD2uZDpk+z917mQVqmo0NBH7hi/Uo0oE0t8OHPj9NNX16k0+eBeJobkc6ufuUtMxFwD8r8A3SAqrK8EDCVRlWsGtKyy3S8iUIlbnxSmNbbMak+U4f5pwl8AN/AqYlY16fCfBxAn+NnOHg2+kWv5aZpUv/dgznNivIXTewAr9Tmi+H+SktV0LBmt8nqu3DHd1fi875ND6FemNv+Fq0K6mgHgUOQX4qyBvTck4kdXan01kdsovFyGMELrnl9QaMP99rppnMSv3mXiOl+RqBvyeBFeQbgW8qOEPGcpmCM+SuTQBrI46sSnvXV8z4l/YbodZMnpzT5WIAAAAASUVORK5CYII="
                            alt="github"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;