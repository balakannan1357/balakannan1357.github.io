import { Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";

const experience = [
  {
    role: "Junior Software Engineer",
    company: "Peninsular Research Operations",
    duration: "Jul 2023 - Present",
    achievements: [
      "Implemented Kafka producer and consumer with 90% memory usage reduction.",
      "Enhanced scalability by orchestrating microservices with Redis.",
      "Integrated Azure Functions, reducing response time by 80%.",
      "Transitioned charting solutions to ECharts for better performance.",
      "Developed no-code/low-code BPMN workflows with Form.io.",
      "Created reusable Node.js components, reducing redundant code by 70%.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Peninsular Research Operations",
    duration: "Feb 2023 - Jun 2023",
    achievements: [
      "Assisted in data science projects with data processing techniques.",
      "Supported web application design and development.",
    ],
  },
];

const Experience = () => {
  return (
    <Box sx={{ mt: 5, p: 3 }}>
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
        Experience
      </Typography>
      <Timeline>
        {experience.map((job, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              {index < experience.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">
                {job.role} - {job.company}
              </Typography>
              <Typography color="textSecondary">{job.duration}</Typography>
              <ul>
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;
