import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { CommentHtml } from './CommentHtml';

export default { title: 'CommentHtml' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={CommentHtml} />;
}
