import classNames from 'classnames';
import React, { Component, createRef } from 'react';
import { SVGGraph } from 'calendar-graph';

const CLASS_NAME = 'react-calendar-graph';

// todo: tobe optimize
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

/*
From github:
--color-calendar-graph-day-bg: #ebedf0;
--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
--color-calendar-graph-day-L1-bg: #9be9a8;
--color-calendar-graph-day-L2-bg: #40c463;
--color-calendar-graph-day-L3-bg: #30a14e;
--color-calendar-graph-day-L4-bg: #216e39;
 */

const colorAsGithub = (value) => {
  if (value === 0) return '#ebedf0';
  if (value < 5) return '#9be9a8';
  if (value < 10) return '#40c463';
  if (value < 15) return '#30a14e';
  return '#216e39';
};

export default class ReactCalendarGraph extends Component<ReactCalendarGraphProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    items: [],
    graphOptions: {
      colorFun: (v) => {
        const count = v.count;
        return colorAsGithub(count);
      }
    }
  };

  private rootRef = createRef<HTMLDivElement>();
  private ghRef = createRef<HTMLDivElement>();
  private svgInstance: any = null;

  componentDidMount() {
    const { items, graphOptions } = this.props;
    this.svgInstance = new SVGGraph(this.ghRef.current, items, graphOptions);
    this.renderTooltip();
  }

  shouldComponentUpdate(nextProps: Readonly<ReactCalendarGraphProps>): boolean {
    const { items } = nextProps;
    if (items !== this.props.items) this.rerender(items);
    return true;
  }

  rerender(inData) {
    this.svgInstance.data = inData;
    this.svgInstance.render();
    this.renderTooltip();
  }

  renderTooltip() {
    setTimeout(() => tooltipInit(this.rootRef.current), 100);
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
