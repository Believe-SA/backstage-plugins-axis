import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  Avatar,
  InfoCard,
  MarkdownContent,
  LinkButton,
} from '@backstage/core-components';
import { Project } from '@axis-backstage/plugin-jira-dashboard-common';
import { ProjectInfoLabel } from './ProjectInfoLabel';
import { getProjectUrl } from '../../lib';
import { makeStyles } from '@mui/styles';

type JiraProjectCardProps = {
  project: Project;
};

// MUI class to disable all margin inside the markdown content for p descendants
const markdownContentClass = makeStyles(() => ({
  markdown: {
    '& p': {
      margin: 0,
    },
  },
}));
export const JiraProjectCard = ({ project }: JiraProjectCardProps) => {
  return (
    <InfoCard variant="fullHeight">
      <Stack direction="row" gap={1} alignItems="center" mb={1}>
        <Avatar
          picture={project.avatarUrls['48x48']}
          customStyles={{
            width: 48,
            height: 48,
          }}
        />

        <Typography fontSize={20}>
          {project.name} | {project.projectTypeKey ?? ''}
        </Typography>
      </Stack>
      <Divider />
      <Stack gap={2} ml={1} my={2}>
        <ProjectInfoLabel label="Project key" value={project.key} />
        {project.projectCategory?.name && (
          <ProjectInfoLabel
            label="Category"
            value={project.projectCategory.name}
          />
        )}
        {project.description && (
          <ProjectInfoLabel
            label="Description"
            value={
              <MarkdownContent
                content={project.description}
                dialect="common-mark"
                className={markdownContentClass().markdown}
              />
            }
          />
        )}
        {(project?.lead?.key || project?.lead?.displayName) && (
          <ProjectInfoLabel
            label="Project lead"
            value={project?.lead?.displayName || project?.lead?.key}
          />
        )}
      </Stack>
      <LinkButton
        color="primary"
        variant="contained"
        to={getProjectUrl(project)}
      >
        Go to project
      </LinkButton>
    </InfoCard>
  );
};
