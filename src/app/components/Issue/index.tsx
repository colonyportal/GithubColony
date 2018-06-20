import * as React from "react";
import { Issue } from "../../models/IssueModel";
import { ListGroupItem } from "reactstrap";
import * as styles from "./styles.css";

type Props = {
  index: number;
  issue: Issue;
  convertToColonyTask: (issueIndex: number) => void;
};

const Issue: React.SFC<Props> = ({ index, issue, convertToColonyTask }) => {
  return (
    <ListGroupItem key={`issue-${index}`}>
      <span className="font-weight-bold">Title: </span>
      <p className="text-muted">{issue.title}</p>
      <span className="font-weight-bold">Descriptions: </span>
      <p className="text-muted">{issue.body}</p>
      <span className="font-weight-bold">Link: </span>
      <div className="d-flex justify-content-between">
        <a href={issue.url}>{issue.url}</a>
        <button
          className={`${styles.convertButton}`}
          onClick={() => convertToColonyTask(index)}
          data-issue-index={index}
        >
          Convert to Colony Task
        </button>
      </div>
    </ListGroupItem>
  );
};

export default Issue;