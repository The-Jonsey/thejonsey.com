---
title: "Reducing Cognitive Load: The Key to a Better Developer Experience"
description: Learn how reducing cognitive load improves Developer Experience (DevEx) by minimizing distractions, streamlining workflows, and optimizing tooling, because no one wants more TPS reports.
pubDate: Feb 12 2025
heroImage: /img/blog-posts/reducing-cognitive-load.png
---


Software Engineering is a field with cognitive complexity built in, even just at the core of the job,
it includes parsing the stakeholder/product owner requirements, writing code for that, which covers off the edge cases,
all while negotiating a codebase that likely has its fair share of technical debt, then writing tests that cover all possible edge cases,
all this while considering security, backwards compatibility, and the performance of the code. All of that is before things
like code reviews, QA, change approval process, and scrum ceremonies, and context switching and the other core parts of most
corporate roles come into play. So its of no massive surprise that so many software-engineers burnout and turn to farming instead.

All of this is called **cognitive load**, and unburdening development teams of it is one of the most effective steps towards
a good Developer Experience (DevEx) one can take. Whether it be removing a clunky and unnecessary process, updating outdated tooling,
removing or documenting cryptic error messages, or even making sure TPS reports don't need filling out for the fourth time because
someone forgot to attach the new cover sheet, [that'd be great](https://www.youtube.com/watch?v=jsLUidiYm0w).

Streamlining processes, simplifying and standardising tooling, and fostering a cross-functional cross-collaborative culture
while minimizing distractions from those meetings that definitely could have been emails, it allows engineers to do what
they are best at, writing quality code. But before we can tackle cognitive load and move towards this utopian world, we
firstly need to understand what cognitive load is.

### What is cognitive load?

![Cognitive Load](/img/blog-posts/cognitive-load.webp)
Cognitive load, in laymans terms, is the amount of working memory is in use in the brain to perform a task, or to put it
in a more nerdy way, the amount of RAM the brain is using, and there's 3 types of cognitive load:

- Intrinsic cognitive load: this is the complexity of task itself, and parsing any new information related to the task, simplifying this can help with reducing cognitive load.
- Germane cognitive load: This is the problem-solving, the taking of the new information, and, combining it with existing knowledge to solve the problem, maximising this should always be the aim.
- Extraneous cognitive load: This is any distraction or information not required to complete the task, eliminating as much of this possible should be the main aim.

<br/>

The goal of any program to reduce cognitive load should be simplifying intrinsic cognitive load, whether it be by documenting better or
splitting tasks up into more manageable chunks, and eliminating the extraneous cognitive load, by removing or scheduling meetings not required to the task
so they fall back to back, to eliminate unneeded ramp-up and ramp-down times from the flow state. All of this is for the purpose of giving the most
cognitive capacity for the germane load, to actually process the task and complete it.

### Common sources of cognitive load, and how to manage them

The vast majority of the cognitive load that isn't the germane will be extraneous sources of load, things that, while
they have no bearing on the task itself, are consuming headspace that could be used to resolve the task, some of these being:

1. **Poorly maintained and clunky tooling**
![Clunky Maintained Tooling](/img/blog-posts/wget.png)

Tooling should be the ace up a developers sleeve, helping to complete a task by automating the repetitive/monotonous parts, while leaving the developer
with the headspace to complete their task. But all too often these aces can end up being a problem their own, whether it being arguing with an IDE or
a compiler, debugging why a pipeline failed, or troubleshooting some proprietary tooling, all taking the developers focus away from their task.

**Solutions**: Setting up a platform/DevEx team to help standardise and manage proprietary tooling and pipelines, while setting up more automation where possible, and encourage a culture of documentation and collaboration to help developers solve tooling problems faster.

2. **Overly Complicated Codebases**
![Spaghetti Code](/img/blog-posts/spaghetti.png)

Modifying long-standing code bases that has had multiple hands in it can be difficult at the best of times, but this difficult can easily skyrocket
when it involves negotiating a mountain of technical-debt, without meaningful documentation to support this process, so they can spend
as much time figuring out how to negotiate the codebase as figuring out solving the task. This could all be due to spaghetti code, where even navigating
the control flow is like navigating the amazon, outdated comments, and inconsistent standards.

**Solutions**: Give time for refactoring and technical debt to be tackled, write up and enforce clear standards, and encourage the usage of ADRs (architectural decision records) in the repository for all decisions, to document not only the state of the project, but why it is the way it is.

3. **Context Switching and Interruptions**

The interconnected world we live in, while it is easy to reach out and ask for help, or a favour, does come at the cost of concentration, as a
software engineer in a flow state will often have hours worth of context in their head, which can be gone in more or less an instant with a "quick" question
on slack, or a call on teams, while the actual interruption itself can be short, it can take a good amount of time to get back to that flow state, and not
to mention it can be tiring regaining that context multiple times, which is why avoiding context switching where possible is critical.

**Solutions**: Cancelling unneeded meetings, and rescheduling meetings where possible to be in a block without gaps, as these gaps, at best
serve as the time for the developer to gain context, before losing it again, and at worst, have no productive time in them, setting up, and 
respecting focus time, both as the developer not replying or acknowledging non-critical messages/notification during focus time, and
other team members holding off sending a non-critical message when they notice the person they are about to message is in focus time.

4. **Long-winded blocking processes**

Process can often be seen as a way of implementing guard rails, or ensuring standards are maintained, but often times these
end up overly complicated, bureaucratic, and a mountain of red-tape to cut through, they can also often lead to the issue they were put in place
to prevent, for example a strict change approval process can lead to changes being bundled, which can increase risk and incidents, which causes
the process to become stricter, and changes to be bundled even more as it takes more work to navigate the process.

**Solutions**: Remove and simplify processes where possible, and taking a behaviour driven approach to designing process
rather than a reactionary one, and implement policy as code to automate the application of processes, which can help ensure
it is completed quickly and accurately, without bogging the developers down.

### Continuously improving


When developers are constantly battling distractions, unclear processes, or clunky tools, their productivity, creativity,
and overall job satisfaction suffer. By identifying and minimizing these friction points—whether it’s through better tooling,
cleaner code, or fewer context switches—organizations can create an environment where developers can focus on what they do best:
solving problems and building great software. Investing in DevEx isn’t just about making engineers happy—it’s about improving efficiency, innovation, and overall business success.
The less cognitive overhead developers have, the more they can contribute to high-impact work.

Unfortunately there is no silver bullet when it comes to reducing cognitive load, and it is often not a quick process,
but one that can take months, if not years, and the first step should be implementing regular surveys with the team, not only
to get an idea of the starting state, but to allow for regular check-ins on progress, and using key metrics such as cycle-time,
and DORA to track and validate these improvements, as well as acknowledging that this is a continuous process, and not a one time fix,
as, left unchecked, these issues will creep back in over-time, and just like with code itself, it can always be better.
