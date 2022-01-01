import classNames from 'classnames';
import React, { Component, createRef } from 'react';
import { SVGGraph } from 'calendar-graph';

const CLASS_NAME = 'react-calendar-graph';

// tobe opmtize
function tooltipInit(inContext) {
  const tip = inContext.querySelector(`.${CLASS_NAME}__tooltip`) as HTMLDivElement;
  let elems = inContext.getElementsByClassName('cg-day');
  const mouseOver = function (e) {
    e = e || window.event;
    const elem = e.target || e.srcElement;
    const rect = elem.getBoundingClientRect();
    const count = elem.getAttribute('data-count');
    const date = elem.getAttribute('data-date');
    tip.style.display = 'block';
    tip.textContent = `${count} contributions on ${date}`;
    const w = tip.getBoundingClientRect().width;
    tip.style.left = `${rect.left - w / 2 + 6}px`;
    tip.style.top = `${rect.top - 35}px`;
  };

  const mouseOut = function (e) {
    e = e || window.event;
    tip.style.display = 'none';
  };

  for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener('mouseover', mouseOver, false);
    elems[i].addEventListener('mouseout', mouseOut, false);
  }
}

export type ReactCalendarGraphProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * The data source.
   */
  items?: any[];
  /**
   * The calendar-graph instance options.
   */
  graphOptions?: any;
};

export default class ReactCalendarGraph extends Component<ReactCalendarGraphProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    items: []
  };

  private rootRef = createRef<HTMLDivElement>();
  private ghRef = createRef<HTMLDivElement>();
  private svgInstance: any = null;

  componentDidMount() {
    const { items, graphOptions } = this.props;
    this.svgInstance = new SVGGraph(this.ghRef.current, items, graphOptions);
    setTimeout(() => tooltipInit(this.rootRef.current), 100);

    console.log(this.svgInstance);
  }

  shouldComponentUpdate(nextProps: Readonly<ReactCalendarGraphProps>): boolean {
    const { items } = nextProps;
    if (items !== this.props.items) this.rerender(items);
    return true;
  }

  rerender(inData) {
    this.svgInstance.data = inData;
    this.svgInstance.render();
  }

  render() {
    const { className, items, graphOptions, ...props } = this.props;

    return (
      <section
        ref={this.rootRef}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <div className={`${CLASS_NAME}__gh`} ref={this.ghRef} />
        <div className={`${CLASS_NAME}__tooltip`} />
      </section>
    );
  }
}
