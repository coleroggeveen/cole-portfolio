import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../../modal/modal.component';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule, ModalComponent, CarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showModal = false;
  selectedProject: any = null;

  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal site built to showcase my projects using Bootstrap and CSS.',
      stack: ['CSS', 'Bootstrap', 'GitHub Pages'],
      link: 'https://yourportfolio.com'
    },
    {
      title: 'AI Support Bot',
      description: 'A support chatbot trained to use our Capstone sponsor\'s training documentation. There are only screenshots but the frontend is built with Angular, which calls the Dialogflow API.',
      stack: ['Angular', 'Node', 'Google Dialogflow CX'],
      images: ['assets/images/chatbot-photo.PNG', 'assets/images/chatbot-photo2.PNG', 'assets/images/dialogflow-logo.jpg']
    },
        {
      title: 'Hotel Booking Website',
      description: 'A hotel website that you can book rooms on, based on the amount on vacancy and cost. The website features a weather widget that fetches the hotel\'s weather from an API.',
      stack: ['JavaScript', 'JQuery', 'GitHub Pages', 'Bootstrap', 'API Calls'],
      link: 'https://coleroggeveen.github.io/hotel-website/'
    },
    {
      title: 'Tetris',
      description: 'A Tetris project made using C++.',
      stack: ['C++'],
      link: 'https://yourapp.com'
    },
        {
      title: 'Text Based Chess Game',
      description: 'A chess game built using C++. You make each move with the command line.',
      stack: ['C++'],
      link: 'https://yourportfolio.com'
    },
    {
      title: 'This Website',
      description: 'A portfolio website built using Angular and Tailwind CSS.',
      stack: ['Angular', 'Tailwind', 'GitHub Pages'],
      link: 'https://github.com/coleroggeveen/cole-portfolio'
    },
    // Add more projects...
  ];

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  handleProjectClick(project: any) {
  if (project.link) {
    window.open(project.link, '_blank');
  } else {
    this.showModal = true;
    this.selectedProject = project;
  }
}

}

