class LogIn {
    constructor() {
      this.input = createInput("").attribute("placeholder", "What's your name?");
      this.button = createButton('Login');
      this.greeting = createElement('h4');
      this.title = createElement('h1');  
      this.question = createElement('h3');
      this.option = createElement('h3')
      this.science = createButton('Science');
      this.maths = createButton('Maths');
      this.study = createButton('Study');
      this.test = createButton('Test');
      this.sch1 = createButton('Food : Where does it come from?');
      this.sch2 = createButton('Components of Food');
      this.sch3 = createButton('Fibre To Fabric');
      this.sch4 = createButton('Sorting materials into groups');
      this.sch5 = createButton('Separation of substances');
      this.sch6 = createButton('Changes Around Us');
      this.sch7 = createButton('Getting to know Plants');
      this.sch8 = createButton('Body Movements');
      this.sch9 = createButton('The living organisms and their surroundings');
      this.sch10 = createButton('Motion and Measurement of distances');
      this.sch11 = createButton('Light, Shadows and Reflections');
      this.sch12 = createButton('Electricity and Circuits');
      this.sch13 = createButton('Fun with Magnets');
      this.sch14 = createButton('Water');
      this.sch15 = createButton('Air Around us');
      this.sch16 = createButton('Garbage in, Garbage out');
      this.tch = createElement('h3');
      this.Error = createElement('h2');
    }  
    display(){
      this.title.html("Log in to Study Plus");
      this.title.position(displayWidth/2-100, 50);
  
      this.input.position(displayWidth/2-50, 150);
      this.input.style('background', 'skyblue');
      this.button.position(displayWidth/2+75, 175);
      this.button.style('background', 'red');
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.title.hide();
        
      this.option.html("Do you want to study or test?");
      this.option.position(displayWidth/2-50, 100);
      
      this.study.position(displayWidth/2+50, 150);
      this.study.style('background', 'pink');
      this.test.position(displayWidth/2+50, 200);
      this.test.style('background', 'pink');
      
      user.name = this.input.value();
      this.greeting.html("Hello " + user.name)
      this.greeting.position(displayWidth/7, 20);

      this.test.mousePressed(()=>{
        this.option.hide();
        this.study.hide();
        this.test.hide();

        this.question.html("Which topic do you want to give test now?");
        this.question.position(displayWidth/2-50, 100);
  
        this.science.position(displayWidth/2+50, 150);
        this.science.style('background', 'yellow');
        this.maths.position(displayWidth/2+50, 200);
        this.maths.style('background', 'yellow');

        this.science.mousePressed(()=>{
            this.science.hide();
            this.maths.hide();
            this.tch.html("See up !! There you will get chapter wise test option.");
            this.tch.position(displayWidth/2-50, 150);
          })
          
        this.maths.mousePressed(()=>{
          this.science.hide();
          this.maths.hide();
          this.question.hide();
          this.Error.html("Slow internet connection. Try again later!!");
          this.Error.position(displayWidth/2-50, 150);
        })
       })

      this.study.mousePressed(()=>{
        this.option.hide();
        this.study.hide();
        this.test.hide();

        this.question.html("What do you want to study now?");
        this.question.position(displayWidth/2-50, 100);
  
        this.science.position(displayWidth/2+50, 150);
        this.science.style('background', 'yellow');
        this.maths.position(displayWidth/2+50, 200);
        this.maths.style('background', 'yellow');
  
        this.maths.mousePressed(()=>{
          this.science.hide();
          this.maths.hide();
          this.question.hide();
          this.Error.html("Slow internet connection. Try again later!!");
          this.Error.position(displayWidth/2-50, 150);
        })

          this.science.mousePressed(()=>{
              this.science.hide();
              this.maths.hide();
  
              this.sch1.position(displayWidth/2-50, 150);
              this.sch2.position(displayWidth/2-50, 200);
              this.sch3.position(displayWidth/2-50, 250);
              this.sch4.position(displayWidth/2-50, 300);
              this.sch5.position(displayWidth/2-50, 350);
              this.sch6.position(displayWidth/2-50, 400);
              this.sch7.position(displayWidth/2-50, 450);
              this.sch8.position(displayWidth/2-50, 500);
              this.sch9.position(displayWidth/2-50, 550);
              this.sch10.position(displayWidth/2-50, 600);
              this.sch11.position(displayWidth/2-50, 650);
              this.sch12.position(displayWidth/2-50, 700);
              this.sch13.position(displayWidth/2-50, 750);
              this.sch14.position(displayWidth/2-50, 800);
              this.sch15.position(displayWidth/2-50, 850);
              this.sch16.position(displayWidth/2-50, 900);

              this.sch1.mousePressed(()=>{
                  this.sch1.hide();
                  this.sch2.hide();
                  this.sch3.hide();
                  this.sch4.hide();
                  this.sch5.hide();
                  this.sch6.hide();
                  this.sch7.hide();
                  this.sch8.hide();
                  this.sch9.hide();
                  this.sch10.hide();
                  this.sch11.hide();
                  this.sch12.hide();
                  this.sch13.hide();
                  this.sch14.hide();
                  this.sch15.hide();
                  this.sch16.hide();

                  this.question.hide();
  
                  slide1.visible = true;
                  slide2.visible = true;
                  slide3.visible = true;
                  slide4.visible = true;
                  slide5.visible = true;
                  slide6.visible = true;
                  slide7.visible = true;
                  slide8.visible = true;
                  slide9.visible = true;
                  slide10.visible = true;
                  slide11.visible = true;
                  slide12.visible = true;
                  slide13.visible = true;
                  slide14.visible = true;
                  slide15.visible = true;
                  slide16.visible = true;
                  slide17.visible = true;
              })
              this.sch2.mousePressed(()=>{
                this.sch1.hide();
                this.sch2.hide();
                this.sch3.hide();
                this.sch4.hide();
                this.sch5.hide();
                this.sch6.hide();
                this.sch7.hide();
                this.sch8.hide();
                this.sch9.hide();
                this.sch10.hide();
                this.sch11.hide();
                this.sch12.hide();
                this.sch13.hide();
                this.sch14.hide();
                this.sch15.hide();
                this.sch16.hide();
                this.question.hide();

                this.Error.html("Slow internet connection. Try again later!!");
                this.Error.position(displayWidth/2-50, 150);
              })
              this.sch3.mousePressed(()=>{
                this.sch1.hide();
                this.sch2.hide();
                this.sch3.hide();
                this.sch4.hide();
                this.sch5.hide();
                this.sch6.hide();
                this.sch7.hide();
                this.sch8.hide();
                this.sch9.hide();
                this.sch10.hide();
                this.sch11.hide();
                this.sch12.hide();
                this.sch13.hide();
                this.sch14.hide();
                this.sch15.hide();
                this.sch16.hide();
                this.question.hide();
                
                this.Error.html("Slow internet connection. Try again later!!");
                this.Error.position(displayWidth/2-50, 150);
              })
              this.sch4.mousePressed(()=>{
                this.sch1.hide();
                this.sch2.hide();
                this.sch3.hide();
                this.sch4.hide();
                this.sch5.hide();
                this.sch6.hide();
                this.sch7.hide();
                this.sch8.hide();
                this.sch9.hide();
                this.sch10.hide();
                this.sch11.hide();
                this.sch12.hide();
                this.sch13.hide();
                this.sch14.hide();
                this.sch15.hide();
                this.sch16.hide();
                this.question.hide();
                
                this.Error.html("Slow internet connection. Try again later!!");
                this.Error.position(displayWidth/2-50, 150);
              })
              this.sch5.mousePressed(()=>{
                this.sch1.hide();
                this.sch2.hide();
                this.sch3.hide();
                this.sch4.hide();
                this.sch5.hide();
                this.sch6.hide();
                this.sch7.hide();
                this.sch8.hide();
                this.sch9.hide();
                this.sch10.hide();
                this.sch11.hide();
                this.sch12.hide();
                this.sch13.hide();
                this.sch14.hide();
                this.sch15.hide();
                this.sch16.hide();
                this.question.hide();
                
                this.Error.html("Slow internet connection. Try again later!!");
                this.Error.position(displayWidth/2-50, 150);
              })
              this.sch6.mousePressed(()=>{
                this.sch1.hide();
                this.sch2.hide();
                this.sch3.hide();
                this.sch4.hide();
                this.sch5.hide();
                this.sch6.hide();
                this.sch7.hide();
                this.sch8.hide();
                this.sch9.hide();
                this.sch10.hide();
                this.sch11.hide();
                this.sch12.hide();
                this.sch13.hide();
                this.sch14.hide();
                this.sch15.hide();
                this.sch16.hide();

                this.question.hide();

                slide18.visible = true;
                slide19.visible = true;
                slide20.visible = true;
                slide21.visible = true;
                slide22.visible = true;
                slide23.visible = true;
                slide24.visible = true;
                slide25.visible = true;
                slide26.visible = true;
                slide27.visible = true;
                slide28.visible = true;

            })
            this.sch7.mousePressed(()=>{
              this.sch1.hide();
              this.sch2.hide();
              this.sch3.hide();
              this.sch4.hide();
              this.sch5.hide();
              this.sch6.hide();
              this.sch7.hide();
              this.sch8.hide();
              this.sch9.hide();
              this.sch10.hide();
              this.sch11.hide();
              this.sch12.hide();
              this.sch13.hide();
              this.sch14.hide();
              this.sch15.hide();
              this.sch16.hide();
              this.question.hide();
              
              this.Error.html("Slow internet connection. Try again later!!");
              this.Error.position(displayWidth/2-50, 150);
            })
            this.sch8.mousePressed(()=>{
              this.sch1.hide();
              this.sch2.hide();
              this.sch3.hide();
              this.sch4.hide();
              this.sch5.hide();
              this.sch6.hide();
              this.sch7.hide();
              this.sch8.hide();
              this.sch9.hide();
              this.sch10.hide();
              this.sch11.hide();
              this.sch12.hide();
              this.sch13.hide();
              this.sch14.hide();
              this.sch15.hide();
              this.sch16.hide();
              this.question.hide();
              
              this.Error.html("Slow internet connection. Try again later!!");
              this.Error.position(displayWidth/2-50, 150);
            })
            this.sch9.mousePressed(()=>{
              this.sch1.hide();
              this.sch2.hide();
              this.sch3.hide();
              this.sch4.hide();
              this.sch5.hide();
              this.sch6.hide();
              this.sch7.hide();
              this.sch8.hide();
              this.sch9.hide();
              this.sch10.hide();
              this.sch11.hide();
              this.sch12.hide();
              this.sch13.hide();
              this.sch14.hide();
              this.sch15.hide();
              this.sch16.hide();
              this.question.hide();
              
              this.Error.html("Slow internet connection. Try again later!!");
              this.Error.position(displayWidth/2-50, 150);
            })
            this.sch10.mousePressed(()=>{
              this.sch1.hide();
              this.sch2.hide();
              this.sch3.hide();
              this.sch4.hide();
              this.sch5.hide();
              this.sch6.hide();
              this.sch7.hide();
              this.sch8.hide();
              this.sch9.hide();
              this.sch10.hide();
              this.sch11.hide();
              this.sch12.hide();
              this.sch13.hide();
              this.sch14.hide();
              this.sch15.hide();
              this.sch16.hide();
              this.question.hide();
              
              this.Error.html("Slow internet connection. Try again later!!");
              this.Error.position(displayWidth/2-50, 150);
            })
            this.sch11.mousePressed(()=>{
              this.sch1.hide();
              this.sch2.hide();
              this.sch3.hide();
              this.sch4.hide();
              this.sch5.hide();
              this.sch6.hide();
              this.sch7.hide();
              this.sch8.hide();
              this.sch9.hide();
              this.sch10.hide();
              this.sch11.hide();
              this.sch12.hide();
              this.sch13.hide();
              this.sch14.hide();
              this.sch15.hide();
              this.sch16.hide();
              this.question.hide();
              
              this.Error.html("Slow internet connection. Try again later!!");
              this.Error.position(displayWidth/2-50, 150);
            })
            this.sch12.mousePressed(()=>{
              this.sch1.hide();
              this.sch2.hide();
              this.sch3.hide();
              this.sch4.hide();
              this.sch5.hide();
              this.sch6.hide();
              this.sch7.hide();
              this.sch8.hide();
              this.sch9.hide();
              this.sch10.hide();
              this.sch11.hide();
              this.sch12.hide();
              this.sch13.hide();
              this.sch14.hide();
              this.sch15.hide();
              this.sch16.hide();
              this.question.hide();
              
              this.Error.html("Slow internet connection. Try again later!!");
              this.Error.position(displayWidth/2-50, 150);
            })
            this.sch13.mousePressed(()=>{
              this.sch1.hide();
              this.sch2.hide();
              this.sch3.hide();
              this.sch4.hide();
              this.sch5.hide();
              this.sch6.hide();
              this.sch7.hide();
              this.sch8.hide();
              this.sch9.hide();
              this.sch10.hide();
              this.sch11.hide();
              this.sch12.hide();
              this.sch13.hide();
              this.sch14.hide();
              this.sch15.hide();
              this.sch16.hide();
              this.question.hide();
              
              this.Error.html("Slow internet connection. Try again later!!");
              this.Error.position(displayWidth/2-50, 150);
            })
            this.sch14.mousePressed(()=>{
              this.sch1.hide();
              this.sch2.hide();
              this.sch3.hide();
              this.sch4.hide();
              this.sch5.hide();
              this.sch6.hide();
              this.sch7.hide();
              this.sch8.hide();
              this.sch9.hide();
              this.sch10.hide();
              this.sch11.hide();
              this.sch12.hide();
              this.sch13.hide();
              this.sch14.hide();
              this.sch15.hide();
              this.sch16.hide();
              this.question.hide();
              
              this.Error.html("Slow internet connection. Try again later!!");
              this.Error.position(displayWidth/2-50, 150);
            })
            this.sch15.mousePressed(()=>{
              this.sch1.hide();
              this.sch2.hide();
              this.sch3.hide();
              this.sch4.hide();
              this.sch5.hide();
              this.sch6.hide();
              this.sch7.hide();
              this.sch8.hide();
              this.sch9.hide();
              this.sch10.hide();
              this.sch11.hide();
              this.sch12.hide();
              this.sch13.hide();
              this.sch14.hide();
              this.sch15.hide();
              this.sch16.hide();
              this.question.hide();
              
              this.Error.html("Slow internet connection. Try again later!!");
              this.Error.position(displayWidth/2-50, 150);
            })
            this.sch16.mousePressed(()=>{
              this.sch1.hide();
              this.sch2.hide();
              this.sch3.hide();
              this.sch4.hide();
              this.sch5.hide();
              this.sch6.hide();
              this.sch7.hide();
              this.sch8.hide();
              this.sch9.hide();
              this.sch10.hide();
              this.sch11.hide();
              this.sch12.hide();
              this.sch13.hide();
              this.sch14.hide();
              this.sch15.hide();
              this.sch16.hide();
              this.question.hide();
              
              this.Error.html("Slow internet connection. Try again later!!");
              this.Error.position(displayWidth/2-50, 150);
            })
      })
        })
     });
    }
  }
  