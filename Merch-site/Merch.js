
const persons = [
  {
    name: "Vidyarashmi Hanehalli",
    title: "President",
    photo: "../images/members1/Vidyarashmi.jpg",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
    social: {

    instagram: "https://www.instagram.com/vidyarashmihanehalli",
    envelope: "mailto:vidyarashmi19@iisertvm.ac.in"
    }
  },
  {
    name: "Shreya Venkatesan",
    photo: "../images/members1/Shreya.jpg",
    title: "Vice President",
    bio:
      "<p>With a fondness for literature and biology, Shreya combines these via scientific writing. Her other interests include music, dance, atrocious puns, and constructive debates. However, the real love of her life will always be cats—a polarising opinion, for sure, but true love's course never did run smooth.</p>",
    social: {
    }
  },

};












const app = new Vue({
  el: "#app",
  data() {
    return {
      persons: persons,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedPersonData: {
        name: null,
        title: null,
        photo: null,
        social: {
          facebook: null,
          twitter: null,
          linkedin: null
        }
      }
    };
  },
  methods: {
    selectPerson(index, el) {
      if (!this.isOk) {
        this.selectedPersonIndex = index;
        this.isSelected = true;
        el.target.parentElement.className == "person-details"
          ? (this.selectedPerson = el.target.parentElement.parentElement)
          : (this.selectedPerson = el.target.parentElement);

        this.selectedPerson.classList.add("person-selected");
        this.selectedPerson.setAttribute(
          "style",
          `width:${this.selectedPerson.offsetWidth}px;`
        );
        this.selectedPersonData = this.persons[index];
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedPerson
            .offsetWidth}px;height:${this.selectedPerson
            .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
            .selectedPerson.offsetTop}px;position:fixed`;
          this.selectedPerson.setAttribute("style", this.inlineStyles);
        }, 400);
        window.setTimeout(() => {
          this.isReady = true;
          this.isOk = true;
        }, 420);
      } else {
        this.reset();
      }
    },
    reset() {
      this.isReady = false;
      window.setTimeout(() => {
        this.selectedPerson.classList.add("person-back");
      }, 280);
      window.setTimeout(() => {
        this.selectedPerson.setAttribute("style", "");
      }, 340);
      window.setTimeout(() => {
        this.isSelected = false;
        this.selectedPerson.classList.remove("person-back", "person-selected");
        this.isOk = false;
      }, 400);
    }
  }
});
