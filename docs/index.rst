*********************************
INFECTION MODEL PARALLEL PORTLET
*********************************

============
About
============

While the first version of the Infection Model portlet was executed sequentially, this version, the Infection Model parallel portlet, would be executed in parallel. This porlet will be used to investigate how an Agent Based modelling simulation experiments can be executed in parallel by making use of high performance computing facilities.

Similar to the Infection model portlet, it makes use of different input parameters to help users submit expereiments and obtain results. These parameters include: input parameters for the model include the simulation period (specifies how many years the simulation will run), recovered count (specifies the initial healthy population), infected count (specifies the initial infected population) and susceptible count (specifies the initial susceptible population). When an infected agent approaches a susceptible agent, it becomes infected and if there are more than one susceptible agent in the cell, only one, randomly selected agent, is infected. Infected agents recover after a period and become healthy with a level of immunity. Recovered agents immunity decreases every time they are approached by an infected agent and when immunity becomes zero, the recovered agent becomes susceptible and can be infected again, thereby, forming a host of infection networks.

However, rather than running jobs sequentially, with machines having only a single core, this version will run jobs with machines that have many cores running at different cloud sites.


============
Installation
============

Some text....

============
Usage
============

Some text...

==============
Contributor(s)
==============

If you have any questions or comments, please feel free to contact us using the
Sci-GaIA project dicussion forum (`discourse.sci-gaia.eu <discourse.sci-gaia.eu>`_)

.. _BRUNEL: http://www.brunel.ac.uk/
.. _DFA: http://www.dfa.unict.it/

:Authors:
 Roberto BARBERA - University of Catania (DFA_),

 Adedeji FABIYI  - Brunel University London (BRUNEL_),

 Simon TAYLOR    - Brunel University London (BRUNEL_),

 Mario TORRISI   - University of Catania (DFA_)
