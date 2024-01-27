import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
   projects : any = [
    {
        projectName: "Project 1",
        description: "Description for Project 1",
        image: "path/to/project1-image.jpg"
    },
    {
        projectName: "Project 2",
        description: "Description for Project 2",
        image: "path/to/project2-image.jpg"
    },
    {
        projectName: "Project 3",
        description: "Description for Project 3",
        image: "path/to/project3-image.jpg"
    },
    {
        projectName: "Project 4",
        description: "Description for Project 4",
        image: "path/to/project4-image.jpg"
    },
    {
        projectName: "Project 5",
        description: "Description for Project 5",
        image: "path/to/project5-image.jpg"
    }
];

}
