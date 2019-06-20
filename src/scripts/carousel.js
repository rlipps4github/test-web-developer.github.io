export const carousel = () => {
    const _carousel = {
  
        options: {
            slideIndex: null,
            slideCount: null,
            slideWidth: null
        },

        _getDimensions() {
            const slides = document.querySelector("#gallery");
            this.options.slideIndex = Number(document.querySelector('[data-idx].showing').getAttribute('data-idx'));
            this.options.slideCount = this.options.slideCount || slides.childElementCount;
            this.options.slideWidth = this.options.slideWidth || slides.firstElementChild.offsetWidth;
        },
    
        _registerEvents() {
            const leftArrow = document.querySelector(".arrow-left");
            const rightArrow = document.querySelector(".arrow-right");

            leftArrow.addEventListener("click", () => {
                this._getDimensions();
                this.options.slideIndex = this.options.slideIndex > 0 ? this.options.slideIndex - 1 : this.options.slideCount -1;
                this. _showSlide();
            });
    
            rightArrow.addEventListener("click", () => {
                this._getDimensions();
                this.options.slideIndex = this.options.slideIndex < this.options.slideCount - 1 ? this.options.slideIndex + 1 : 0;
                this. _showSlide();
            });
        },

        _showSlide() {
            let hideSlide = document.querySelector('[data-idx].showing');
            let showSlide = document.querySelector('[data-idx="'+ this.options.slideIndex +'"]');
            hideSlide.classList.remove('showing');
            showSlide.classList.remove('hiding');
            showSlide.classList.add('showing');
            hideSlide.classList.add('hiding');
        }
    };
  
    _carousel._registerEvents();
    return _carousel;

  };