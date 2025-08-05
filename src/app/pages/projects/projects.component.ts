import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  activeProject: any = null;

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
      link: 'https://yourapp.com'
    },
        {
      title: 'Hotel Booking Website',
      description: 'A hotel website that you can book rooms on, based on the amount on vacancy and cost. The website features a weather widget that fetches the hotel\'s weather from an API.',
      stack: ['JavaScript', 'JQuery', 'GitHub Pages', 'Bootstrap', 'API Calls'],
      link: 'https://yourportfolio.com'
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
      link: 'https://yourapp.com'
    },
    // Add more projects...
  ];

  openModal(project: any) {
    this.activeProject = project;
  }

  closeModal() {
    this.activeProject = null;
  }
}

