import { SortableContainer } from 'react-sortable-hoc'

const SortableContainerComponent = SortableContainer((props) => <tr {...props} />);

const DraggableContainer = (props) => {
  <SortableContainerComponent
    useDragHandle
    disableAutoscroll
    helperClass="row-dragging"
    onSortEnd={this.onSortEnd}
    {...props}
  />;
};

export default DraggableContainer;