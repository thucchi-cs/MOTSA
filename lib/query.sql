CREATE TABLE officer_prompts (
  id SERIAL PRIMARY KEY,
  prompt TEXT NOT NULL
);

INSERT INTO officer_prompts (prompt) VALUES 
  ('What''s your name, grade, and TSA office?'),
  ('How long have you been in TSA?'),
  ('What do you like to do outside of TSA?'),
  ('What''s a fun fact about you?'),
  ('What message would you give to first-time TSA members?'),
  ('What''s your favorite TSA event and why?'),
  ('What''s your favorite TSA memory?'),
  ('What''s one thing you''ve learned from TSA?'),
  ('What are your plans after high school?'),
  ('What inspired you to join TSA?'),
  ('What do you hope to achieve as a State Officer?');

CREATE TABLE officer_responses (
  id SERIAL PRIMARY KEY,
  officer SERIAL,
  prompt SERIAL,
  response TEXT NOT NULL,
  FOREIGN KEY (officer) REFERENCES officers(id),
  FOREIGN KEY (prompt) REFERENCES officer_prompts(id)
);

INSERT INTO officer_responses (officer, prompt, response) VALUES 
  (1, 1, 'My name is Hailey Hunter, and I''m a senior at Carl Junction High School. I am honored to be your state president!'),
  (1, 2, 'I have been in TSA since 7th grade, making this my 6th (and sadly final) year.'),
  (1, 3, 'Outside of TSA, I enjoy hanging out with my friends (which often involves getting coffee), playing tennis, working full-time at Whataburger (to fund my coffee trips), and volunteering in my community.'),
  (1, 4, 'I''m an avid Malcom Todd fan and I''ve seen him in concert!'),
  (1, 5, 'Try as many new events as you can! I''ve tried several events over the years and have been surprised at how much I enjoyed some of them!'),
  (2, 1, 'My name is Corinne Merrell, I am a senior from Carl Junction High School, and I am excited to be your state vice president.'),
  (2, 6, 'Chapter Team- I love the teamwork that the event demands, and my office team has always enjoyed being creative and thinking outside of the box in our meetings.'),
  (2, 3, 'Outside of TSA I love going antiquing with my friends, going on walks with my mom, playing with my dog Norm, and making money by working part-time at a daycare.'),
  (2, 7, 'Late night IHOP trips with my chapter''s officer team!'),
  (2, 5, 'Don''t be afraid to run for leadership positions! It may be scary at first, but being a leader in TSA can help you in so many ways.'),
  (3, 1, 'My name is Valeria Figueroa, I am a senior at Carl Junction High School, and I am your 2025-2026 Missouri Secretary.'),
  (3, 3, 'Outside of TSA I play soccer and tennis. I am involved in band, and I work part-time at Dairy Queen! I also love to read and hang out with my friends.'),
  (3, 7, 'I have many fond memories with TSA, but my favorite one is all of the coffee trips with my friends during the State Championships Conference!'),
  (3, 2, 'I have been in TSA since 8th grade, making this my fifth year with the organization!'),
  (3, 6, 'My favorite TSA event is Chapter Team because I get to work with my fellow chapter officers to run a mock business meeting using parliamentary procedures.'),
  (4, 1, 'My name is Truman, I''m a Senior at Wentzville Holt High School, and I am your 2025-2026 Missouri TSA State Treasurer.'),
  (4, 6, 'My favorite TSA event has to be On Demand Video. It just allows for so much creativity among the group, and you really just get to have a lot of fun with your teammates.'),
  (4, 2, 'I joined TSA in my freshman year of high school, so that would make this my 4th and final year.'),
  (4, 3, 'Outside of TSA, I like to hang out and play video games with my friends, collect shiny rocks and listen to to/compose music.'),
  (4, 4, 'I can remember the quadratic formula without the song.'),
  (5, 1, 'My name is Nandu Rakesh Nair, I am a sophomore at Wentzville Liberty High School, and I will be serving as your Missouri TSA State Reporter during this 2025-2026 school year.'),
  (5, 5, 'Understand the guidelines of your event and make sure you cover each category on the rubric.'),
  (5, 7, 'Getting 8th place in On Demand Video at TSA Nationals 2025 in Nashville.'),
  (5, 8, 'Your connection with others will propel you forward in all aspects of life.'),
  (5, 6, 'On-demand video because it gives you total creative freedom over the final product and does not require a lot of preparation due to the prompts being given to everyone at the same time.'),
  (6, 1, 'My name is Angelica Hill and I''m a freshman at Troy Buchanan High School''s 9th Grade Center this year as your 2025-2026 MOTSA Sergeant at Arms!'),
  (6, 2, 'I''ve been in TSA since my 6th grade year, so this''ll be my 4th year in the organization.'),
  (6, 6, 'My favorite TSA event has got to be Prepared Speech because I got to see the growth in my skills from the first time I did it in my 6th grade year to the second and last time I''ll ever be able to compete in it in my 8th grade year.'),
  (6, 9, 'I plan to pursue Robotics and Control Engineering at the United States Naval Academy.'),
  (6, 5, 'Don''t be afraid to try new things! It''s good to keep yourself busy as I''ve learned from experience of not having enough to work on and having too much to do.'),
  (7, 1, 'I''m Owen Duffy, a senior at Liberty High School, and I am the Northwest regional vice president.'),
  (7, 2, 'I joined TSA 3 years ago as a freshman, and this year will be my 4th.'),
  (7, 10, 'I heard from friends that it was fun, wide-ranging, and a good way to hang out with friends.'),
  (7, 9, 'I plan to pursue graduate school in electrical engineering.'),
  (7, 3, 'I lead my FRC team; I''m a member of my school''s ACE club; I''m an Eagle Scout; I play cello, guitar, and piano; and I go bouldering/rock-climbing.'),
  (8, 1, 'Hey, my name is Aryan Patel and I am a sophomore at Liberty High School in Wentzville. I am a regional vice president.'),
  (8, 6, 'My favorite TSA event would be the Senior Solar Sprint since it gives you a lot of freedom to choose how you want to make your car instead of just following a set of directions and rules like other events.'),
  (8, 10, 'I joined TSA because I thought it would be a nice way to hang out with my friends who also joined and have some fun making projects. It wasn''t until I went to state where I knew that I wanted to continue and improve TSA.'),
  (8, 2, 'I joined TSA in 8th grade which makes this my third year of TSA.'),
  (8, 7, 'My favorite memory was winning in state for the first time in 8th grade and being able to qualify to go to nationals for TSA.'),
  (9, 1, 'Nice to meet you! My name is Colby Westhoff and I am a senior who goes to Carl Junction High School. My TSA Office is Regional Vice President of Southwest Missouri TSA.'),
  (9, 8, 'My experience in TSA has taught me to respect everyone who participates in the program, because there is something to learn from everyone''s individual perspective.'),
  (9, 7, 'My favorite memory of TSA is when my fellow Carl Junction members were elected as TSA State Officers, after working so hard for years.'),
  (9, 9, 'I want to go to a four-year university in Missouri to pursue my undergraduate and then a law degree.'),
  (9, 11, 'I hope to contribute to the success of TSA by providing steadfast assistance and support to everyone who needs it, whether they are a member or an officer.');

CREATE TABLE officer_bios (
  id SERIAL PRIMARY KEY,
  officer SERIAL,
  bio TEXT NOT NULL,
  FOREIGN KEY (id) REFERENCES officers(id)
);

INSERT INTO officer_bios (officer, bio) VALUES 
  (1, 'Hailey has been in TSA since 7th grade and has held a leadership position within her chapter since then. She is overjoyed by the community she has found within TSA and hopes to welcome others into it as well. After TSA, Hailey hopes to become a dentist after attending MSSU and KCU.'),
  (2, 'Corinne joined TSA in 7th grade (at the request of her local advisor) and has been loving it ever since. She is focused on expanding STEM outreach to younger audiences. Her favorite events are chapter team and forensics, but her overall favorite part of TSA is the state conference. After TSA, Corinne hopes to attend WashU and major in mathematics. #WomenInSTEM'),
  (3, 'Valeria joined TSA in 8th grade and has found a community in the organization since she joined. Her favorite TSA events are Chapter Team and Forensic Technology, and she has done those events every year since joining. After TSA, Valeria hopes to major in political science and history, and eventually go to law school.'),
  (4, 'Truman joined TSA in his freshman year of high school to find an organization to be a part of. He quickly found a space where he could develop his technical skills and meet new people. After TSA, Truman plans to major in either computer science or geology.'),
  (5, 'Nandu joined TSA in 8th grade and quickly found his passion in competing in competitive events of all varieties to challenge himself and discover the implications of STEM in different environments. As your State Reporter, he hopes to harness a strong connection between the TSA members and the state officer team through a more holistic and connected approach to media.'),
  (6, 'Angelica joined TSA in 6th grade and is thrilled to be serving as your Sergeant at Arms in her freshman year of high school. Her favorite TSA event is Prepared Speech as it allowed her to see the growth she had made from her first year of middle school compared to her last. Although rather early, Angelica wishes to pursue Robotics and Control Engineering at the United States Naval Academy. Finally, if she could send out one message to anyone in their first year of TSA, it is to “not be afraid to try new things” as she has learned from her experience of “not having enough to work on to having too much to do.”'),
  (7, 'Owen joined TSA as a Freshman in high school to spend more time with friends and further his STEM education. He hopes to continue developing the Northwest region and furthering the TSA vision.'),
  (8, 'Aryan joined TSA as an 8th grader originally just for fun but quickly found his niche for events such as Senior Solar Sprint and Engineering Design. As your Regional Vice President, he aims to help create a smoother and more enjoyable regional conference for TSA. Aryan enjoys playing tennis, hanging out with his friends, and participating in both outdoor and indoor activities.');