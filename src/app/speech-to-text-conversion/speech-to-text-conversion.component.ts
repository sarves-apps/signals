import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-speech-to-text-conversion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './speech-to-text-conversion.component.html',
  styleUrl: './speech-to-text-conversion.component.css'
})
export class SpeechToTextConversionComponent {
 ///normal speach to text convertion

  // recognition: any;
  // transcript: string = '';
  // constructor(private zone: NgZone) {}
  // ngOnInit(): void {
  //   const { webkitSpeechRecognition }: any = window;
  //   this.recognition = new webkitSpeechRecognition();
  //   this.recognition.continuous = true;
  //   this.recognition.interimResults = true;
  //   this.recognition.lang = 'en-US';
  //   this.recognition.onresult = (event: any) => {
  //     let finalTranscript = '';
  //     for (let i = event.resultIndex; i < event.results.length; i++) {
  //       if (event.results[i].isFinal) {
  //         finalTranscript += event.results[i][0].transcript;
  //       }
  //     }
  //     this.zone.run(() => {
  //       this.transcript = finalTranscript;
  //     });
  //   };
  // }

  // startListening() {
  //   this.recognition.start();
  // }

  // stopListening() {
  //   this.recognition.stop();
  // }

  recognition: any;
  transcript: string = '';
  selectedLanguage: string = 'es-ES'; // Default language
  constructor(private zone: NgZone) {}
  ngOnInit(): void {
    const { webkitSpeechRecognition }: any = window;
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.onresult = (event: any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      this.zone.run(() => {
        this.transcript = finalTranscript;
      });
    };
  }
  startListening() {
    this.recognition.lang = this.selectedLanguage;
    this.recognition.start();
  }
  stopListening() {
    this.recognition.stop();
  }
}
